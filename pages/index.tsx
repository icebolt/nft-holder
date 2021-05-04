import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Button, message } from 'antd'

import Layout from '../components/layout'
import FeaturedFlow from '../components/featured-flow'
import fetchRecommendCards from '../lib/fetch-recommend-cards'
import { CardDataType } from '../typings/card'
import styles from '../styles/home.module.css'

export interface HomeProps {
  list: CardDataType[]
}

export default function Home({ list }: HomeProps) {
  const router = useRouter()
  return (
    <Layout home>
      <div className={styles.slideshow}>
        <div className={styles.en}>
          A Digital Way to Value Your Weibo Posts & Threads
        </div>
        <div className={styles.cn}>你的微博，也能买卖</div>
        <div className={styles.btns}>
          <Button
            className={`${styles.item} ${styles.sell}`}
            onClick={() => {
              message.info('功能暂未开放')
            }}
          >
            我要卖
          </Button>
          <Button
            className={`${styles.item} ${styles.buy}`}
            onClick={() => router.push('/search')}
          >
            我要买
          </Button>
        </div>
      </div>
      <div className="container">
        <FeaturedFlow list={list} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  list: CardDataType[]
}> = async () => {
  try {
    const result = await fetchRecommendCards(15, 1)
    const { list } = result

    return {
      props: {
        list: list
          ? [
              ...list.map((item: any) => {
                const data: CardDataType = {
                  id: item.data.data.id,
                  creator: {
                    id: item.data.data.user.id.toString(),
                    avatar: item.data.data.user.profile_image_url,
                    name: item.data.data.user.screen_name
                  },
                  content: item.data.data.text,
                  thumbnails: item.data.data.pics
                    ? item.data.data.pics.map((item: any) => item.url)
                    : [],
                  repostsCount: item.data.data.reposts_count,
                  commentsCount: item.data.data.comments_count,
                  attitudesCount: item.data.data.attitudes_count
                }

                if (item.owner_id !== item.uid) {
                  data.holder = {
                    id: item.owner_id,
                    name: item.owner_name
                  }
                }

                if (item.amount) {
                  data.quotedPrice = {
                    top: item.amount * 1
                  }
                }

                return data
              })
            ]
          : []
      }
    }
  } catch (error) {
    console.error(error)
    return { props: { list: [] } }
  }
}
