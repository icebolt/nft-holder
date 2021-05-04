import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Modal, Popover, Space, message } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { formatMoney } from 'accounting'
import moment from 'moment'
import QRCode from 'qrcode.react'
import { useClipboard } from 'use-clipboard-hook'

import Card from '../components/card'
import useIsMobile from '../hooks/use-is-mobile'
import { CardDataType } from '../typings/card'
import styles from './share-modal.module.css'

export interface ShareModalProps {
  visible?: boolean
  price?: number
  time?: number
  hash?: string
  cardData?: CardDataType
  onClose?: () => void
}

const ShareModal: React.FC<ShareModalProps> = ({
  visible = false,
  price,
  time,
  hash,
  cardData,
  onClose
}) => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { copy } = useClipboard({
    onSuccess: () => message.success('复制链接成功')
  })

  const [origin, setOrigin] = useState<string>()

  useEffect(() => {
    setOrigin(location.origin)
  }, [])

  return (
    <Modal
      maskClosable
      width={550}
      closable={false}
      footer={false}
      visible={visible}
      bodyStyle={{
        padding: 0,
        height: cardData?.thumbnails?.length === 0 ? 680 : 870
      }}
      onCancel={onClose}
    >
      <div
        className={`${styles.body} ${
          cardData?.thumbnails?.length === 0 ? styles.small : ''
        }`}
      >
        <div className={styles.logo}>NFT-HOLDER</div>
        <div
          className={`${styles.card} ${
            cardData?.thumbnails?.length === 0 ? styles.small : ''
          }`}
          style={{ height: cardData?.thumbnails?.length === 0 ? 221 : 420 }}
        >
          <Card
            // transparentBackground
            contentHeight={55}
            thumbnailHeight={210}
            type="simple"
            data={cardData}
            carousel={false}
          />
        </div>
        <div className={`${styles.info} ${!price ? styles.none : ''}`}>
          <div className={styles.left}>
            <div className={styles.u}>
              Creator: <span>{cardData?.creator.name}</span>
            </div>
            {cardData?.holder && price && (
              <div className={styles.u}>
                Holder: <span>{cardData?.holder.name}</span>
              </div>
            )}
            {price && (
              <>
                <div className={styles.price}>
                  {price ? formatMoney(price, '¥ ') : '暂无报价'}
                </div>
                <div className={styles.time}>
                  Time:
                  <span style={{ marginLeft: 5 }}>
                    {time ? moment(time).format('YYYY/MM/DD') : '-'}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.qrcode}>
              <QRCode
                value={`${origin}${router.asPath}`}
                bgColor={'#ffffff'}
                fgColor={'#000000'}
                includeMargin={true}
                renderAs={'svg'}
                level={'M'}
                size={!price ? 110 : 90}
              />
              <div className={styles.text}>扫码参与竞拍</div>
            </div>
          </div>
        </div>
        {hash && <div className={styles.hash}>{hash}</div>}
        <div className={styles.btns}>
          <Popover
            content={
              <Space direction="vertical">
                <Button
                  type="primary"
                  shape="round"
                  size="small"
                  icon={<LinkOutlined />}
                  onClick={() => copy(`${origin}${router.asPath}`)}
                >
                  复制链接
                </Button>
                {/* <Button
                  type="primary"
                  shape="round"
                  size="small"
                  icon={<WeiboOutlined />}
                  id="wbPublish"
                  onClick={() => {}}
                >
                  分享到微博
                </Button> */}
              </Space>
            }
            title={false}
            trigger="click"
            placement={isMobile ? 'top' : 'right'}
          >
            <Button
              block
              type="primary"
              size="large"
              className={`${styles.btn}`}
            >
              我要分享
            </Button>
          </Popover>
        </div>
      </div>
    </Modal>
  )
}

export default ShareModal
