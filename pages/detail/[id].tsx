import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Button,
  Table,
  TableColumnProps,
  notification,
  Space,
  Statistic,
  Spin,
  Tooltip,
  Tag
} from 'antd'
import {
  ShareAltOutlined,
  DoubleRightOutlined,
  LoadingOutlined,
  ReloadOutlined
} from '@ant-design/icons'
import { formatMoney } from 'accounting'
import moment from 'moment'
import useSWR from 'swr'

import Layout from '../../components/layout'
import Card from '../../components/card'
import PriceInput from '../../components/price-input'
import QuotedPriceModal from '../../components/quoted-price-modal'
import SellModal from '../../components/sell-modal'
import ShareModal from '../../components/share-modal'
import useMe from '../../hooks/use-me'
import useIsMobile from '../../hooks/use-is-mobile'
import fetchWeibo from '../../lib/fetch-weibo'
import fetchRecords from '../../lib/fetch-records'
import fetcher from '../../lib/fetcher'
import { CardDataType, CardStatus, StatDataType } from '../../typings/card'
import {
  RecordItemDataType,
  RecordItemTypeMap,
  MyOfferType,
  SellDataType,
  WinResultType,
  FinalDataType
} from '../../typings/record'
import { PaymentUrlType } from '../../typings/payment'
import styles from '../../styles/detail.module.css'

const { Countdown } = Statistic

export interface DetailProps {
  cardStatus: CardStatus
  cardData?: CardDataType
}

export default function Detail({ cardData, cardStatus }: DetailProps) {
  const router = useRouter()
  const { query } = router
  const { me } = useMe()
  const isMobile = useIsMobile()
  const [records, setRecords] = useState<RecordItemDataType[]>([])
  const [hasMoreRecords, setHasMoreRecords] = useState<boolean>(true)
  const [recordsPage, setRecordsPage] = useState<number>(1)
  const [price, setPrice] = useState<number>()
  const [myOffer, setMyOffer] = useState<MyOfferType>()
  const [sellData, setSellData] = useState<SellDataType>()
  const [sendConfirmVisible, setSendConfirmVisible] = useState<boolean>(false)
  const [sellConfirmVisible, setSellConfirmVisible] = useState<boolean>(false)
  const [shareVisible, setShareVisible] = useState<boolean>(false)
  const [shouldSendRequest, setShouldSendRequest] = useState<boolean>(false)
  const [shouldSellRequest, setShouldSellRequest] = useState<boolean>(false)
  const [shouldFetchMyOffer, setShouldFetchMyOffer] = useState<boolean>(false)
  const [shouldFetchMoreRecords, setShouldFetchMoreRecords] = useState<boolean>(
    true
  )
  const [shouldPaymentRequest, setShouldPaymentRequest] = useState<boolean>(
    false
  )

  // 是原始发布者/创作者
  const isCreator = me?.isLoggedIn && me.id === cardData?.creator?.id
  // 是当前持有者
  const isHolder = me?.isLoggedIn && me.id === cardData?.holder?.id
  // 是否已经出售
  const hasBeenSold = cardStatus === 1
  // 是否可以购买
  const canPurchased = me?.isLoggedIn && hasBeenSold ? !isHolder : !isCreator

  useEffect(() => {
    if (me?.isLoggedIn && !hasBeenSold) {
      setShouldFetchMyOffer(true)
    }
  }, [hasBeenSold, me?.isLoggedIn])

  // 加载更多交易记录请求
  const {
    isValidating: fetchMoreRecordsValidating = true,
    mutate: mutateFetchMoreRecords
  } = useSWR<RecordItemDataType[]>(
    shouldFetchMoreRecords && hasMoreRecords
      ? `/api/records?id=${query.id}&pageSize=20&current=${recordsPage}`
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

  // 查询自己是否已中标
  const {
    data: hasWon,
    isValidating: hasWonValidating
  } = useSWR<WinResultType>(
    me?.isLoggedIn && canPurchased ? `/api/my/win?id=${query.id}` : null,
    { revalidateOnFocus: false }
  )

  // 查询已出售给谁
  const { data: selling, isValidating: sellingValidating = true } = useSWR<
    string[]
  >(
    !canPurchased && !fetchMoreRecordsValidating
      ? `/api/selling?id=${query.id}`
      : null,
    {
      revalidateOnFocus: false
    }
  )

  // 查询当前成交价
  const { data: final } = useSWR<FinalDataType>(
    me?.isLoggedIn && hasBeenSold ? `/api/final?id=${query.id}` : null,
    {
      revalidateOnFocus: false
    }
  )

  // 查询我的报价请求
  const {
    isValidating: fetchMyOfferValidating = true,
    mutate: mutateFetchMyOffer
  } = useSWR<MyOfferType>(
    shouldFetchMyOffer ? `/api/my/offer?id=${query.id}` : null,
    {
      onSuccess: (data) => {
        if (data.price && data.expire) setMyOffer(data)
        setShouldFetchMyOffer(false)
      }
    }
  )

  // 查询统计数据请求
  const {
    data: statData,
    isValidating: fetchStatDataValidating = true,
    mutate: mutateFetchStatData
  } = useSWR<StatDataType>(`/api/card/stat?id=${query.id}`, {
    revalidateOnFocus: false
  })

  // 发送报价请求
  const { isValidating: sendLoading = false } = useSWR(
    shouldSendRequest ? '/api/offer' : null,
    (url) =>
      fetcher(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ id: query.id, price })
      }),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess: () => {
        notification.success({ message: '报价成功' })
        setPrice(undefined)
        setShouldSendRequest(false)
        setSendConfirmVisible(false)
        setShouldFetchMyOffer(true)
        setShouldFetchMoreRecords(true)
        setHasMoreRecords(true)
        setRecordsPage(1)
        mutateFetchMyOffer()
        mutateFetchMoreRecords()
        mutateFetchStatData()
      },
      onError: () => {
        notification.error({ message: '报价发送失败，请重试' })
        setShouldSendRequest(false)
      }
    }
  )

  // 出售给Ta请求
  const { isValidating: sellLoading = false } = useSWR(
    shouldSellRequest ? '/api/sell' : null,
    (url) =>
      fetcher(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ id: sellData?.id })
      }),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess: () => {
        notification.success({ message: '操作成功' })
        setShouldSellRequest(false)
        setSellConfirmVisible(false)
        setShouldFetchMoreRecords(true)
        setHasMoreRecords(true)
        setRecordsPage(1)
        mutateFetchMoreRecords()
      },
      onError: () => {
        notification.error({ message: '操作失败，请重试' })
        setShouldSellRequest(false)
      }
    }
  )

  // 获取付款链接请求
  const { isValidating: paymentLoading = false } = useSWR<PaymentUrlType>(
    shouldPaymentRequest ? '/api/payment' : null,
    (url) =>
      fetcher(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          orderId: hasWon?.orderId,
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

  const columns: TableColumnProps<RecordItemDataType>[] = [
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
      render: (value) => RecordItemTypeMap[value]
    },
    {
      title: '时间',
      key: 'time',
      dataIndex: 'time',
      render: (value) => moment(value).format('YYYY/MM/DD HH:mm')
    },
    {
      title: '用户昵称',
      key: 'user.name',
      dataIndex: ['user', 'name']
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
          {me?.isLoggedIn && !canPurchased && item.type === 0 && !item.expire && (
            <div className={styles['table-action']}>
              <Space>
                {!sellingValidating && selling && selling.length === 0 && (
                  <Button
                    type="primary"
                    size="small"
                    shape="round"
                    onClick={() => {
                      setSellData({
                        id: item.id,
                        price: item.price,
                        name: item.user.name
                      })
                      setSellConfirmVisible(true)
                    }}
                  >
                    出售给Ta
                  </Button>
                )}
                {!sellingValidating &&
                  selling &&
                  selling.includes(item.user.id) && (
                    <Tag color="#1858f9">等待付款</Tag>
                  )}
              </Space>
            </div>
          )}
          {me?.isLoggedIn && item.expire && (
            <div className={styles['table-action']}>
              <Space>
                <Tag color="#000" style={{ opacity: 0.3 }}>
                  已过期
                </Tag>
              </Space>
            </div>
          )}
        </>
      )
    }
  ]

  // 报价
  const onSend = () => {
    if (!price || price < 10 || String(price / 10).indexOf('.') !== -1) {
      notification.error({
        message: '报价金额必须是10的整数倍'
      })
      return
    }
    setSendConfirmVisible(true)
  }

  // 确认报价
  const onSendOk = () => setShouldSendRequest(true)

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

  // 确定出售给Ta
  const onSellOk = () => setShouldSellRequest(true)

  // 去支付
  const onPayment = () => setShouldPaymentRequest(true)

  return (
    <Layout>
      <ShareModal
        visible={shareVisible}
        cardData={cardData}
        price={
          hasBeenSold
            ? final
              ? final?.price
              : undefined
            : records.length !== 0
            ? records[0].price
            : undefined
        }
        time={
          hasBeenSold
            ? final
              ? final?.time
              : undefined
            : records.length !== 0
            ? records[0].time
            : undefined
        }
        onClose={() => setShareVisible(false)}
      />
      <SellModal
        price={sellData?.price}
        name={sellData?.name}
        visible={sellConfirmVisible}
        loading={sellLoading}
        onOk={onSellOk}
        onCancel={() => setSellConfirmVisible(false)}
      />
      <QuotedPriceModal
        price={price}
        visible={sendConfirmVisible}
        loading={sendLoading}
        onOk={onSendOk}
        onCancel={() => setSendConfirmVisible(false)}
      />
      <div className="container">
        <Row gutter={{ xs: 0, sm: 6 }} className={styles.showcase}>
          <Col xs={24} sm={9}>
            <Card arrows type="simple" photoPreview={false} data={cardData} />
          </Col>
          <Col xs={24} sm={1}>
            <div className={styles.tools}>
              <Button
                className={styles.btn}
                onClick={() => setShareVisible(true)}
                icon={<ShareAltOutlined size={18} />}
              />
            </div>
          </Col>
          <Col xs={24} sm={14}>
            <div className={styles.main}>
              <div className={styles.users}>
                <div className={styles.u}>
                  Creator:
                  <span>{cardData?.creator ? cardData.creator.name : '-'}</span>
                </div>
                {cardData?.holder &&
                  cardData.creator.id !== cardData.holder.id && (
                    <div className={styles.u}>
                      Holder:
                      <span>{cardData.holder.name}</span>
                    </div>
                  )}
              </div>
              {/* {me?.isLoggedIn && hasBeenSold && (
                <div className={styles['price-info']}>
                  <div className={styles.title}>成交价格：</div>
                  <div className={styles.high}>
                    {finalValidating && !final && (
                      <Spin
                        indicator={<LoadingOutlined className={styles.spin} />}
                      />
                    )}
                    {final && <>{formatMoney(final.price, '¥ ')}</>}
                  </div>
                  <div className={styles.help}>
                    此卡片已出售，再看看其他的吧！
                  </div>
                </div>
              )} */}
              {me?.isLoggedIn && !canPurchased && (
                <div className={styles['price-info']}>
                  <div className={styles.title}>最高报价：</div>
                  <div className={styles.high}>
                    {fetchStatDataValidating && !statData && (
                      <Spin
                        indicator={<LoadingOutlined className={styles.spin} />}
                      />
                    )}
                    {statData && <>{formatMoney(statData.highPrice, '¥ ')}</>}
                  </div>
                </div>
              )}
              {me?.isLoggedIn && canPurchased && (
                <>
                  {hasWonValidating && (
                    <Spin
                      className={styles['main-loader']}
                      indicator={<LoadingOutlined className={styles.spin} />}
                    />
                  )}
                  {!hasWonValidating && hasWon?.result && hasWon.price && (
                    <div className={styles.win}>
                      <div className={styles.title}>
                        你已中标！中标价格： {formatMoney(hasWon.price, '¥ ')}
                      </div>
                      <div className={styles.help}>
                        请在
                        <Countdown
                          valueStyle={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginLeft: 5,
                            marginRight: 5,
                            color: '#1858f9'
                          }}
                          value={hasWon.expire}
                          format="H 小时 m 分 s 秒"
                        />
                        内付款
                      </div>
                      <div className={styles.help}>
                        请在24小时内完成支付，24小时内未支付将扣除20分信誉分，
                        信誉分低于60分将无法出价。
                      </div>
                      <div className={styles.btns}>
                        <div className={styles.column}>
                          <Button
                            block
                            className={styles.pay}
                            type="primary"
                            size="large"
                            onClick={onPayment}
                            loading={paymentLoading}
                          >
                            去支付
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {!hasWonValidating && !hasWon?.result && (
                    <div className={`${styles['send-price']} send-price`}>
                      {!fetchMyOfferValidating && myOffer && (
                        <div className={styles.prompt}>
                          <div>
                            当前报价为：{formatMoney(myOffer.price, '¥ ')}
                            ，有效期
                          </div>
                          <Countdown
                            valueStyle={{ fontSize: 14, marginLeft: 5 }}
                            value={myOffer.expire}
                            format="H 小时 m 分 s 秒"
                          />
                        </div>
                      )}
                      {!fetchMyOfferValidating && !myOffer && (
                        <div className={styles.prompt}>当前暂无报价</div>
                      )}
                      {fetchMyOfferValidating && (
                        <div className={styles.prompt}>获取你的报价中...</div>
                      )}
                      <div className={styles.input}>
                        <Row gutter={18}>
                          <Col xs={16} flex={!isMobile ? 'auto' : undefined}>
                            <PriceInput
                              value={price}
                              onChange={(value) => setPrice(value)}
                              size="large"
                              precision={0}
                              disabled={sendConfirmVisible}
                            />
                          </Col>
                          <Col xs={8} flex={!isMobile ? '150px' : undefined}>
                            <Button
                              block
                              className="btn"
                              type="primary"
                              size="large"
                              loading={sendConfirmVisible}
                              onClick={onSend}
                            >
                              报价
                            </Button>
                          </Col>
                        </Row>
                        <div className={styles.help}>
                          <p>报价金额必须是10的整数倍</p>
                          <p>
                            如报价后中标，须在24小时内支付，逾期未付将扣除20信誉值
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {!me?.isLoggedIn && (
                <div className={styles.btns}>
                  <div className={styles.column}>
                    <Button
                      block
                      type="primary"
                      size="large"
                      onClick={() =>
                        router.push({
                          pathname: '/login',
                          query: { ref: encodeURIComponent(router.asPath) }
                        })
                      }
                    >
                      我 要 买
                    </Button>
                  </div>
                </div>
              )}
              <div className={styles.statistics}>
                <Row gutter={4}>
                  <Col xs={6} span={8}>
                    <div className={styles.title}>报价单数</div>
                    <div className={`${styles.count} ${styles.first}`}>
                      {fetchStatDataValidating && !statData && (
                        <Spin
                          size="small"
                          indicator={
                            <LoadingOutlined className={styles.spin} />
                          }
                        />
                      )}
                      {statData && (
                        <>
                          <span>{statData.offerTotal}</span>
                          <i>单</i>
                        </>
                      )}
                    </div>
                  </Col>
                  <Col xs={9} span={8}>
                    <div className={styles.title}>报价最高金额</div>
                    <div className={styles.count}>
                      {fetchStatDataValidating && !statData && (
                        <Spin
                          size="small"
                          indicator={
                            <LoadingOutlined className={styles.spin} />
                          }
                        />
                      )}
                      {statData && (
                        <span>{formatMoney(statData.highPrice, '¥ ')}</span>
                      )}
                    </div>
                  </Col>
                  <Col xs={9} span={8}>
                    <div className={styles.title}>报价平均金额</div>
                    <div className={`${styles.count} ${styles.last}`}>
                      {fetchStatDataValidating && !statData && (
                        <Spin
                          size="small"
                          indicator={
                            <LoadingOutlined className={styles.spin} />
                          }
                        />
                      )}
                      {statData && (
                        <span>{formatMoney(statData.averagePrice, '¥ ')}</span>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
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
            scroll={isMobile ? { x: 700 } : {}}
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
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  DetailProps,
  { id: string }
> = async ({ params }) => {
  if (params?.id.length !== 16 || !/^[0-9]+$/.test(params.id)) {
    return { notFound: true }
  }

  let state: DetailProps = {
    cardStatus: 0
  }

  let holder

  try {
    const records = await fetchRecords(params.id)
    const { ownerId, ownerName } = records

    if (ownerId && ownerName) {
      state = {
        ...state,
        cardStatus: 1
      }
      holder = {
        id: ownerId,
        name: ownerName
      }
    }
  } catch (error) {
    console.error(error)
  }

  try {
    const weibo = await fetchWeibo(params.id)
    if (weibo) {
      const weiboData = weibo.data.data
      state = {
        ...state,
        cardData: {
          id: weiboData.id,
          creator: {
            id: weiboData.user.id.toString(),
            avatar: weiboData.user.profile_image_url,
            name: weiboData.user.screen_name
          },
          content: weiboData.text,
          // .replace('https://', `${process.env.API_BASE}/sinaimg/`)
          thumbnails: weiboData.pics
            ? weiboData.pics.map((item: any) => item.url)
            : [],
          repostsCount: weiboData.reposts_count,
          commentsCount: weiboData.comments_count,
          attitudesCount: weiboData.attitudes_count
        }
      }
      if (holder && state.cardData) {
        state.cardData.holder = holder
      }
    }
  } catch (error) {
    console.error(error)
  }

  return { props: state }
}
