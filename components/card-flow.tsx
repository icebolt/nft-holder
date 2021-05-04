import { CSSProperties } from 'react'
import Masonry from 'react-masonry-component'

import styles from './card-flow.module.css'

export interface CardFlowProps {
  children: React.ReactNode
  style?: CSSProperties
  resize?: boolean
  columnWidth?: number
  gutter?: number
}

export default function CardFlow({
  children,
  style,
  resize = false,
  columnWidth,
  gutter
}: CardFlowProps) {
  return (
    <div style={style} className={styles.list}>
      <Masonry
        updateOnEachImageLoad
        enableResizableChildren
        options={{ columnWidth, gutter, resize }}
      >
        {children}
      </Masonry>
    </div>
  )
}
