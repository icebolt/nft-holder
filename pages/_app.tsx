import { AppProps } from 'next/app'
import Router from 'next/router'
import { ConfigProvider, notification } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { SWRConfig } from 'swr'
import NProgress from 'nprogress'

import fetcher from '../lib/fetcher'
import useIsMobile from '../hooks/use-is-mobile'

import '../styles/globals.css'
import '../styles/nprogress.css'
import { useEffect } from 'react'

Router.events.on('routeChangeStart', () => NProgress.start())

Router.events.on('routeChangeComplete', () => NProgress.done())

Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile)
      notification.config({
        placement: 'bottomLeft',
        bottom: 10
      })
  }, [isMobile])

  return (
    <ConfigProvider locale={zhCN}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ConfigProvider>
  )
}
