import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Input,
  Modal,
  Typography,
  Select,
  Row,
  Col,
  Button,
  Carousel,
  Image
} from 'antd'
import { QuestionCircleFilled, CloseCircleOutlined } from '@ant-design/icons'
import WeiboUtil from 'weibo-util'

import IconFont from '../components/iconfont'
import Layout from '../components/layout'
import FeaturedFlow from '../components/featured-flow'
import useIsMobile from '../hooks/use-is-mobile'
import fetchRecommendCards from '../lib/fetch-recommend-cards'
import { CardDataType } from '../typings/card'
import styles from '../styles/search.module.css'

export interface SearchProps {
  list: CardDataType[]
}

export type SearchType = 'weibo'

export default function Search({ list }: SearchProps) {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [questionVisible, setQuestionVisible] = useState<boolean>(false)
  const [searching, setSearching] = useState<boolean>(false)
  const [searchType, setSearchType] = useState<SearchType>('weibo')
  const [searchValue, setSearchValue] = useState<string>('')

  const onSearch = () => {
    setSearching(true)
    switch (searchType) {
      case 'weibo': {
        let id
        if (searchValue.includes('m.weibo')) {
          id = searchValue.substr(-16, 16)
        } else {
          const { error, mid, uid } = WeiboUtil.getMidUid(searchValue)
          if (error || mid.length !== 16 || uid.length !== 10) {
            Modal.warn({
              title: '提示',
              content: (
                <>
                  请输入正确的微博URL，例如：
                  <Typography.Link
                    href="https://weibo.com/6541507761/JmxU17Osp"
                    copyable={{ tooltips: ['复制链接', '复制成功'] }}
                  >
                    https://weibo.com/6541507761/JmxU17Osp
                  </Typography.Link>
                </>
              )
            })
            setSearching(false)
            return
          }
          id = mid
        }
        router.push(`/detail/${id}`)
        break
      }
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className={styles['search-wrapper']}>
          <div className={styles.search}>
            <Row gutter={6}>
              <Col xs={20} sm={19}>
                <Input.Group compact size="large">
                  <Select
                    showArrow
                    defaultValue="weibo"
                    style={{ width: !isMobile ? '17%' : '30%' }}
                    className={styles['search-type']}
                    dropdownClassName={styles['search-type-dropdown']}
                    onChange={(value) => setSearchType(value)}
                  >
                    <Select.Option value="weibo">微博</Select.Option>
                  </Select>
                  <Input
                    style={{ width: !isMobile ? '83%' : '70%' }}
                    className={styles['search-input']}
                    placeholder="请输入微博地址"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onPressEnter={() => onSearch()}
                  />
                </Input.Group>
              </Col>
              <Col xs={4} sm={5}>
                <Button
                  block
                  type="primary"
                  size="large"
                  icon={<IconFont type="iconsearch" />}
                  onClick={onSearch}
                  loading={searching}
                  style={{ width: isMobile ? '100%' : undefined }}
                >
                  {!isMobile && '搜索'}
                </Button>
              </Col>
            </Row>
            <div
              className={styles.question}
              onClick={() => setQuestionVisible(true)}
            >
              <QuestionCircleFilled className={styles.icon} />
              <span className={styles.text}>如何获取微博链接</span>
            </div>
          </div>
        </div>
        <FeaturedFlow list={list} />
      </div>

      <Modal
        width={isMobile ? undefined : 646}
        centered={!!isMobile}
        className="learn-modal"
        closeIcon={<CloseCircleOutlined />}
        maskClosable={false}
        footer={false}
        visible={questionVisible}
        onCancel={() => setQuestionVisible(false)}
        bodyStyle={{ padding: 0, backgroundColor: 'transparent' }}
      >
        <Carousel
          arrows
          infinite={false}
          prevArrow={<span>{!isMobile ? '上一步' : ''}</span>}
          nextArrow={<span>{!isMobile ? '下一步' : ''}</span>}
          className={styles.side}
        >
          <div className={styles.photo}>
            <div className={styles.title}>Step 1</div>
            <Image preview={false} src="/learn01.png" />
          </div>
          <div className={styles.photo}>
            <div className={styles.title}>Step 2</div>
            <Image preview={false} src="/learn02.png" />
          </div>
        </Carousel>
      </Modal>
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
