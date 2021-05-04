import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  Avatar,
  Button,
  Input,
  Space,
  Row,
  Col,
  Divider,
  Dropdown,
  Menu,
  message
} from 'antd'
import { UserOutlined } from '@ant-design/icons'

import useMe from '../hooks/use-me'
import useIsMobile from '../hooks/use-is-mobile'
import styles from './layout.module.css'

export interface LayoutProps {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children }: LayoutProps) {
  const { me, mutateMe } = useMe()
  const isMobile = useIsMobile()
  // const [subscribeLoading, setSubscribeLoading] = useState<boolean>(false)
  const [subscribeMail, setSubscribeMail] = useState<string>()

  const onLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    mutateMe()
  }

  const onSubscribe = () => {
    message.info('功能暂未开放')

    // if (!subscribeMail) return
    // if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(subscribeMail)) {
    //   notification.error({ message: '请输入正确的 Email 地址' })
    //   return
    // }
    // setSubscribeLoading(true)
    // setTimeout(() => {
    //   notification.success({ message: '订阅成功' })
    //   setSubscribeMail('')
    //   setSubscribeLoading(false)
    // }, 1000)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT-Holder | 自媒体衍生品交易平台</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
        <meta name="title" content="NFT-Holder | 自媒体衍生品交易平台" />
        <meta
          name="keywords"
          content="微博、衍生品、交易、NFT、Card、区块链、比特币、以太坊、明星、自媒体、holder"
        />
        <meta
          name="description"
          content="NFT-Holder是自媒体衍生品交易平台。我们通过区块链技术让你的每一条微博都可以变为卡片进行买卖。让你的社交价值得以体现。"
        />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>NFT-Holder</a>
        </Link>
        <div className={styles.navbar}>
          <Link href="/">
            <div className={styles.item}>
              <a>首页</a>
            </div>
          </Link>
          <Link href="/search">
            <div className={styles.item}>
              <a>我要买</a>
            </div>
          </Link>
          <div
            className={styles.item}
            onClick={() => {
              message.info('功能暂未开放')
            }}
          >
            <a>我要卖</a>
          </div>
          <div className={styles.user}>
            {!me?.isLoggedIn && (
              <Link href="/login">
                <Avatar
                  className={styles.avatar}
                  icon={<UserOutlined className={styles.icon} />}
                />
              </Link>
            )}
            {me?.isLoggedIn && (
              <Dropdown
                arrow
                trigger={['click']}
                placement="bottomRight"
                overlayClassName={styles['user-dropdown']}
                overlay={
                  <Menu className={styles['user-menu']}>
                    <Menu.Item key="cards">
                      <Link href="/user/cards">卡片管理</Link>
                    </Menu.Item>

                    <Menu.Item key="cards">
                      <Link href="/user/my_offer">我的报价</Link>
                    </Menu.Item>

                    <Menu.Item key="cards">
                      <Link href="/user/fans_inquiry">粉丝询价</Link>
                    </Menu.Item>

                    <Menu.Item key="record">
                      <Link href="/user/records">交易记录</Link>
                    </Menu.Item>
                    <Menu.Item key="faq">
                      <Link href="/faq">常见问题</Link>
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={onLogout}>
                      退出登录
                    </Menu.Item>
                  </Menu>
                }
              >
                <div>
                  <Avatar
                    className={styles.avatar}
                    icon={<UserOutlined className={styles.icon} />}
                    src={me.avatar}
                  />
                  {!isMobile && <span className={styles.name}>{me.name}</span>}
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={`container ${styles['footer-container']}`}>
          <div className={styles.subscribe}>
            <div className={styles.title}>订阅 NFT-Holder</div>
            <div className={styles.subtitle}>
              订阅后你将了解 NFT-Holder 的最新动态、版本更新以及活动
            </div>
            <div className={styles.input}>
              <Space>
                <Input
                  type="email"
                  className={styles.mail}
                  placeholder="输入你的邮箱"
                  onChange={(e) => setSubscribeMail(e.target.value)}
                  value={subscribeMail}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      onSubscribe()
                    }
                  }}
                />
                <Button
                  type="primary"
                  className={styles.btn}
                  onClick={onSubscribe}
                  // loading={subscribeLoading}
                >
                  订阅
                </Button>
              </Space>
            </div>
          </div>
          <div className={styles.faq}>
            <Row justify="end">
              <Col xs={24} xl={8} className={styles.item}>
                <div className={styles.title}>微博卡片是什么？</div>
                <div className={styles.content}>
                  微博卡片是将新浪微博的内容在创作者授权的情况下铸造成卡片，该卡片是唯一的，因为它已由创作者签名并验证。这份亲笔签名的卡片仅在
                  NFT-Holder 上发行一次。
                </div>
              </Col>
              <Col xs={24} xl={8} className={styles.item}>
                <div className={styles.title}>为什么要买微博卡片？</div>
                <div className={styles.content}>
                  拥有任何数字内容的微博卡片都算是一项金融投资，可以保持情感价值，并可以在收藏家和创作者之间建立联系。
                  就像 NBA 篮球卡上的亲笔签名一样。
                </div>
              </Col>
              <Col xs={24} xl={8} className={styles.item}>
                <div className={styles.title}>为什么要卖微博卡片？</div>
                <div className={styles.content}>
                  你的每一条微博都是一笔财富。卖出它不仅能使你获得物质的奖励，同时也是在传递你的情感与精神。
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`container ${styles['footer-copy-container']}`}>
          <Divider className={styles.copy}>
            星矿科技 &copy; {new Date().getFullYear()}
          </Divider>
        </div>
      </footer>
    </div>
  )
}
