import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Row,
  Col,
  Spin,
  Space,
  Button,
  TableColumnProps,
  Table,
  Tooltip,
  notification
} from 'antd'
import {
  LoadingOutlined,
  DoubleRightOutlined,
  ReloadOutlined
} from '@ant-design/icons'
import useSWR from 'swr'
import { formatMoney } from 'accounting'
import moment from 'moment'

import Layout from '../../components/layout'
import UserProfile from '../../components/user-profile'
import useMe from '../../hooks/use-me'
import useIsMobile from '../../hooks/use-is-mobile'
import fetcher from '../../lib/fetcher'
import { UserStatDataType } from '../../typings/user'
import {
  MyRecordItemDataType,
  MyRecordItemTypeMap,
  WinResultType
} from '../../typings/record'
import { PaymentUrlType } from '../../typings/payment'

import styles from '../../styles/user.module.css'

export interface UserRecordsProps {}

export default function UserRecords() {
  const router = useRouter()
  const { me } = useMe()
  const isMobile = useIsMobile()
  const [currentItem, setCurrentItem] = useState<MyRecordItemDataType>()
  const [currentOrderId, setCurrentOrderId] = useState<string>()
  const [records, setRecords] = useState<MyRecordItemDataType[]>([])
  const [hasMoreRecords, setHasMoreRecords] = useState<boolean>(true)
  const [recordsPage, setRecordsPage] = useState<number>(1)
  const [shouldFetchMoreRecords, setShouldFetchMoreRecords] = useState<boolean>(
    true
  )
  const [shouldPaymentRequest, setShouldPaymentRequest] = useState<boolean>(
    false
  )
  const [shouldFetchWin, setShouldFetchWin] = useState<boolean>(false)

  // 查询统计数据请求
  const {
    data: statData,
    isValidating: fetchStatDataValidating = true
  } = useSWR<UserStatDataType>(me?.isLoggedIn ? `/api/my/stat` : null)

  // 加载更多交易记录请求
  const {
    isValidating: fetchMoreRecordsValidating = true,
    mutate: mutateFetchMoreRecords
  } = useSWR<MyRecordItemDataType[]>(
    shouldFetchMoreRecords && hasMoreRecords
      ? `/api/my/records?pageSize=20&current=${recordsPage}`
      : null,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setShouldFetchMoreRecords(false)
        if (!data.length) {
          setHasMoreRecords(false)
          return
        }
        setRecords(recordsPage === 1 ? data : records.concat(data))
      }
    }
  )

  // 查询 orderId
  const { isValidating: hasWonValidating } = useSWR<WinResultType>(
    shouldFetchWin ? `/api/my/win?id=${currentItem?.detailId}` : null,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess: (data) => {
        setCurrentOrderId(data.orderId)
        setShouldFetchWin(false)
        setShouldPaymentRequest(true)
      },
      onError: () => setShouldFetchWin(false)
    }
  )

  // 获取付款链接请求
  const { isValidating: paymentLoading = false } = useSWR<PaymentUrlType>(
    shouldPaymentRequest && currentOrderId ? '/api/payment' : null,
    (url) =>
      fetcher(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          orderId: currentOrderId,
          returnUrl: location.href
        })
      }),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess: (data) => {
        setShouldPaymentRequest(false)
        const a = document.createElement('a')
        a.target = '_blank'
        a.href = data.paymentUrl
        a.click()
      },
      onError: () => {
        notification.error({ message: '获取付款链接失败，请重试' })
        setShouldPaymentRequest(false)
      }
    }
  )

  // 加载更多交易记录
  const onLoadMore = () => {
    setRecordsPage(recordsPage + 1)
    setShouldFetchMoreRecords(true)
  }

  // 刷新交易记录
  const onReloadRecords = () => {
    setShouldFetchMoreRecords(true)
    setHasMoreRecords(true)
    setRecordsPage(1)
    mutateFetchMoreRecords()
  }

  const columns: TableColumnProps<MyRecordItemDataType>[] = [
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
      render: (value) => MyRecordItemTypeMap[value]
    },
    {
      title: '时间',
      key: 'time',
      dataIndex: 'time',
      render: (value) => moment(value).format('YYYY/MM/DD HH:mm')
    },
    {
      title: '金额',
      key: 'price',
      dataIndex: 'price',
      render: (value) => formatMoney(value, '¥ ')
    },
    {
      render: (_, item) => (
        <>
          {me?.isLoggedIn && (
            <div className={styles['table-action']}>
              <Space>
                <Button
                  type="primary"
                  size="small"
                  shape="round"
                  onClick={() => router.push(`/detail/${item.detailId}`)}
                >
                  查看详情
                </Button>
                {item.type === 0 && (
                  <Button
                    type="primary"
                    size="small"
                    shape="round"
                    onClick={() => {
                      setCurrentItem(item)
                      setShouldFetchWin(true)
                    }}
                    loading={hasWonValidating || paymentLoading}
                  >
                    去支付
                  </Button>
                )}
              </Space>
            </div>
          )}
        </>
      )
    }
  ]

  return (
    <Layout>
      <UserProfile>
        <div className={styles.statistics}>
          <Row gutter={4}>
            <Col xs={12} sm={6} span={6}>
              <div className={styles.title}>购买数</div>
              <div className={`${styles.count} ${styles.first}`}>
                {fetchStatDataValidating && !statData && (
                  <Spin
                    size="small"
                    indicator={<LoadingOutlined className={styles.spin} />}
                  />
                )}
                {statData && (
                  <>
                    <span>{statData.boughtTotal}</span>
                    <i>张</i>
                  </>
                )}
              </div>
            </Col>
            <Col xs={12} sm={6} span={6}>
              <div className={styles.title}>购买总金额</div>
              <div className={`${styles.count} ${isMobile ? styles.last : ''}`}>
                {fetchStatDataValidating && !statData && (
                  <Spin
                    size="small"
                    indicator={<LoadingOutlined className={styles.spin} />}
                  />
                )}
                {statData && (
                  <span>{formatMoney(statData.boughtTotalPrice, '¥ ')}</span>
                )}
              </div>
            </Col>
            <Col xs={12} sm={6} span={6}>
              <div className={styles.title}>出售数</div>
              <div
                className={`${styles.count} ${isMobile ? styles.first : ''}`}
              >
                {fetchStatDataValidating && !statData && (
                  <Spin
                    size="small"
                    indicator={<LoadingOutlined className={styles.spin} />}
                  />
                )}
                {statData && (
                  <>
                    <span>{statData.sellTotal}</span>
                    <i>张</i>
                  </>
                )}
              </div>
            </Col>
            <Col xs={12} sm={6} span={6}>
              <div className={styles.title}>出售总金额</div>
              <div className={`${styles.count} ${styles.last}`}>
                {fetchStatDataValidating && !statData && (
                  <Spin
                    size="small"
                    indicator={<LoadingOutlined className={styles.spin} />}
                  />
                )}
                {statData && (
                  <span>{formatMoney(statData.sellTotalPrice, '¥ ')}</span>
                )}
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.table}>
          <Table
            title={() => (
              <div className={styles.header}>
                交易记录
                <Tooltip title="刷新">
                  <a onClick={onReloadRecords}>
                    <ReloadOutlined />
                  </a>
                </Tooltip>
              </div>
            )}
            columns={columns}
            pagination={false}
            rowKey="id"
            dataSource={records}
            scroll={isMobile ? { x: 500 } : {}}
          />
          {hasMoreRecords && (
            <div className={styles.loadmore}>
              {!fetchMoreRecordsValidating && (
                <DoubleRightOutlined
                  className={styles.icon}
                  onClick={onLoadMore}
                />
              )}
              {fetchMoreRecordsValidating && (
                <Spin indicator={<LoadingOutlined />} />
              )}
            </div>
          )}
        </div>
      </UserProfile>
    </Layout>
  )
}
