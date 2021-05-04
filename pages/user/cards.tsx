import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Spin } from 'antd'
import { LoadingOutlined, DoubleRightOutlined } from '@ant-design/icons'

import Layout from '../../components/layout'
import UserProfile from '../../components/user-profile'
import CardFlow from '../../components/card-flow'
import Card from '../../components/card'
import useIsMobile from '../../hooks/use-is-mobile'
import { MyCardsItemType } from '../../typings/card'

import styles from '../../styles/user.module.css'

export default function UserCards() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [columnWidth, setColumnWidth] = useState<number>(362)
  const [resize, setResize] = useState<boolean>(false)
  const [list, setList] = useState<MyCardsItemType[]>([])
  const [listPage, setListPage] = useState<number>(1)
  const [hasMoreCards, setHasMoreCards] = useState<boolean>(true)
  const [shouldFetchMoreCards, setShouldFetchMoreCards] = useState<boolean>(
    true
  )

  useEffect(() => {
    setColumnWidth(isMobile ? window.screen.width - 40 : 362)
  }, [isMobile])

  // 加载更多卡片请求
  const { isValidating: fetchMoreCardsLoading } = useSWR<MyCardsItemType[]>(
    shouldFetchMoreCards && hasMoreCards
      ? `/api/my/cards?pageSize=10&current=${listPage}`
      : null,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setShouldFetchMoreCards(false)
        if (!data.length) {
          setHasMoreCards(false)
          return
        }
        setList(listPage === 1 ? data : list.concat(data))
        setResize(!resize)
      }
    }
  )

  // 加载更多卡片
  const onLoadMore = () => {
    setListPage(listPage + 1)
    setShouldFetchMoreCards(true)
  }

  const onCardCarouselChange = () => setResize(!resize)

  const onClickCard = (id: string) => router.push(`/detail/${id}`)

  return (
    <Layout>
      <UserProfile>
        <CardFlow columnWidth={columnWidth} gutter={32} resize={resize}>
          {list &&
            list.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ width: columnWidth, marginBottom: 36 }}>
                    <Card
                      type="simple"
                      offerIcon={item.hasOffer}
                      data={item.cardData}
                      onCarouselChange={onCardCarouselChange}
                      onClick={onClickCard}
                    />
                  </div>
                </div>
              )
            })}

          {hasMoreCards && (
            <div className={styles.loadmore}>
              {!fetchMoreCardsLoading && (
                <DoubleRightOutlined
                  className={styles.icon}
                  onClick={onLoadMore}
                />
              )}
              {fetchMoreCardsLoading && (
                <Spin indicator={<LoadingOutlined />} />
              )}
            </div>
          )}
        </CardFlow>
      </UserProfile>
      {!list?.length && (
        <div className={styles.empty_tip}>
          快去看看有没有值得收藏的卡片{' '}
          <a className={styles.gotoPage} onClick={() => router.push('/')}>
            去首页
          </a>
        </div>
      )}
    </Layout>
  )
}
