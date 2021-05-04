import { Carousel, Image } from 'antd'

import Layout from '../components/layout'
import useIsMobile from '../hooks/use-is-mobile'

import styles from '../styles/learn.module.css'

export default function Learn() {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <div className="container">
        <div className={styles.content}>
          {isMobile && (
            <>
              <div className={styles.photo}>
                <div className={styles.title}>Step 1</div>
                <Image preview={true} src="/learn01.png" />
              </div>
              <div className={styles.photo}>
                <div className={styles.title}>Step 2</div>
                <Image preview={true} src="/learn02.png" />
              </div>
            </>
          )}
          {!isMobile && (
            <div className={styles.main}>
              <Carousel
                arrows
                infinite={false}
                prevArrow={<span></span>}
                nextArrow={<span></span>}
                className={styles.side}
                dots={{ className: styles.dots }}
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
