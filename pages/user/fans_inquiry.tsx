import { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import useSWR from 'swr'
import Layout from '../../components/layout'
import CardFlow from '../../components/card-flow'
import Card from '../../components/card'
import styles from '../../styles/fans_inquiry.module.css'
import useIsMobile from '../../hooks/use-is-mobile'

const { TabPane } = Tabs

const FansInquiry = () => {
  const isMobile = useIsMobile()
  const [columnWidth, setColumnWidth] = useState<number>(362)
  const [resize, setResize] = useState<boolean>(false)
  const onCardCarouselChange = () => setResize(!resize)

  useEffect(() => {
    setColumnWidth(isMobile ? window.screen.width - 40 : 362)
  }, [isMobile])

  const {
    data: fansInquiryData,
  } = useSWR<any>(`/api/user/inquiry`)

  const testData1 = {
    attitudesCount: 11278,
    commentsCount: 990,
    content:
      '今天经历了在美国集危险最近的一次！<br />这几天在迈阿密，我车停在路边用手机弄视频，这个人过来跟我说，给我5块钱，让我送他到前面加油站，阿角常年混迹街头，啥人没见过，一看他就不是好人，直接拒绝了他，不一会儿，警察就过来把他抓走了…不是我报的警…<br />他是专门利用人的好心，上车后突然偷袭，抢钱的惯犯…<br />强龙不压地头蛇，迈阿密不是阿角的地盘…要是在洛圣都…他走不出这条街 <a data-url="http://t.cn/R2WxsCs" href="http://weibo.com/p/1001018000100000000000000" data-hide=""><span class=\'url-icon\'><img style=\'width: 1rem;height: 1rem\' src=\'https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_location_default.png\'></span><span class="surl-text">美国</span></a>',
    creator: {
      id: '5991896093',
      avatar:
        'https://tva3.sinaimg.cn/crop.37.47.517.517.180/006…KID=imgbed,tva&Expires=1619786473&ssig=TvhmQFJYSw',
      name: '粉丝询价的毒角SHOW'
    },
    id: '4631242051421741',
    quotedPrice: { top: 20000 },
    repostsCount: 142,
    thumbnails: [
      'https://wx1.sinaimg.cn/orj360/006xvnTnly1gq0btcgqmkj30zo256he2.jpg',
      'https://wx1.sinaimg.cn/orj360/006xvnTnly1gq0bswl5jbj30zo256b2h.jpg',
      'https://wx2.sinaimg.cn/orj360/006xvnTnly1gq0btsgf66j30zo256npm.jpg',
      'https://wx2.sinaimg.cn/orj360/006xvnTnly1gq0bu80oyij30zo256e8a.jpg'
    ]
  }

  const list = [testData1, testData1, testData1, testData1]

  return (
    <Layout>
      <div className={styles.fans_inquiry_page}>
        <div className={styles.top_part}>粉丝询价</div>
        <div
          style={{ padding: isMobile ? 0 : '0 98px' }}
          className={styles.mid_part}
        >
          <Tabs
            defaultActiveKey="1"
            className={styles.tabs}
            tabBarStyle={{ color: '#4c4c4c', padding: isMobile ? '0 20px' : 0 }}
          >
            <TabPane
              className={styles['ant-tabs-tabpane']}
              tab={`询价 (${fansInquiryData && fansInquiryData.length || 0})`}
              key="1"
            >
              <CardFlow columnWidth={columnWidth} gutter={32} resize={resize}>
                {(fansInquiryData && fansInquiryData.length) && fansInquiryData.map((item: any, index: number) => {
                  return (
                    <div
                      className={styles['list-item']}
                      style={{ width: columnWidth, marginBottom: 36 }}
                    >
                      <Card
                        myOfferText="最高价"
                        key={index}
                        data={item}
                        onCarouselChange={onCardCarouselChange}
                        type="my_offer"
                      />
                    </div>
                  )
                })}
              </CardFlow>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}
export default FansInquiry
