import { useEffect, useState } from 'react'

import CardFlow from '../components/card-flow'
import Card from '../components/card'
import useIsMobile from '../hooks/use-is-mobile'
import { CardDataType } from '../typings/card'
import styles from './featured-flow.module.css'

export interface FeaturedFlowProps {
  list: CardDataType[]
}

export default function FeaturedFlow({ list }: FeaturedFlowProps) {
  const isMobile = useIsMobile()
  const [columnWidth, setColumnWidth] = useState<number>(362)
  const [resize, setResize] = useState<boolean>(false)
  const onCardCarouselChange = () => setResize(!resize)

  useEffect(() => {
    setColumnWidth(isMobile ? window.screen.width - 40 : 362)
  }, [isMobile])

  return (
    <>
      <div className={styles['title-box']}>
        <div className={styles.title}>
          <i className={styles.l} />
          <span>
            精<em className={styles.empty} />选
          </span>
          <i className={styles.r} />
        </div>
      </div>
      <CardFlow columnWidth={columnWidth} gutter={32} resize={resize}>
        {list &&
          list.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={styles['list-item']}
                  style={{ width: columnWidth, marginBottom: 36 }}
                >
                  <Card data={item} onCarouselChange={onCardCarouselChange} />
                </div>
              </div>
            )
          })}
      </CardFlow>
    </>
  )
}
