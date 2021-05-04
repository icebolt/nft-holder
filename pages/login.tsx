import { useRouter } from 'next/router'
import { Button, Alert } from 'antd'
import useSWR from 'swr'

import { AccessTokenInfo } from '../typings/user'
import Layout from '../components/layout'
import useMe from '../hooks/use-me'
import styles from '../styles/login.module.css'

export default function Login() {
  const router = useRouter()
  const { mutateMe } = useMe()
  const { query } = router
  const { error: accessTokenError, isValidating } = useSWR<AccessTokenInfo>(
    query.code
      ? `/api/login?code=${query.code}&redirect=${location.origin}/login`
      : null,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess: () => {
        mutateMe()
        router.replace(
          query.state ? decodeURIComponent(query.state as string) : '/'
        )
      }
    }
  )

  const loginWithWeibo = () => {
    const weiboAppKey = process.env.NEXT_PUBLIC_WEIBO_APP_KEY || ''
    if (weiboAppKey) {
      const link = document.createElement('a')
      link.href = `https://api.weibo.com/oauth2/authorize?client_id=${weiboAppKey}&redirect_uri=${
        location.origin
      }/login&response_type=code${query.ref ? `&state=${query.ref}` : ''}`
      link.click()
      link.remove()
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>授权 NFT-Holder 访问你的新浪微博</div>
          <div className={styles.subtitle}>授权是为了使用新浪微博的 API</div>
          {accessTokenError && !isValidating && (
            <Alert
              style={{ marginTop: 40 }}
              message={accessTokenError + ''}
              description="登录失败，请重试"
              type="error"
              closable
              showIcon
            />
          )}
          {!query.code || accessTokenError ? (
            <Button
              type="primary"
              className={styles.btn}
              loading={isValidating}
              onClick={loginWithWeibo}
            >
              使用微博账号登录
            </Button>
          ) : (
            <Alert
              style={{ marginTop: 40 }}
              message="授权登录成功，正在跳转..."
              type="success"
              showIcon
            />
          )}
          <div className={styles.desc}>
            <p>授权 NFT-Holder 可以：</p>
            <p>
              查看你时间线上的微博消息（包括受保护的）。
              <br />
              查看你的 微博个人资料信息和账号设置。
              <br />
              查看你关注、隐藏和屏蔽的账号。
              <br />
              查看你的邮件地址。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
