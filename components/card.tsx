import { useRouter } from 'next/router'
import { Avatar, Carousel, Row, Col, Image, Button } from 'antd'
import { formatMoney } from 'accounting'
import IconFont from '../components/iconfont'
import { CardDataType } from '../typings/card'
import styles from './card.module.css'

export interface CardProps {
  carousel?: boolean
  photoPreview?: boolean
  onCarouselChange?: () => void
  onClick?: (id: string) => void
  data?: CardDataType
  type?: 'default' | 'simple' | 'my_offer'
  hideButton?: boolean
  offerIcon?: boolean
  transparentBackground?: boolean
  contentHeight?: number
  thumbnailHeight?: number
  arrows?: boolean
  isShowPayBtn?: boolean
  myOfferText?: string
}

export default function Card({
  data,
  carousel = true,
  photoPreview = false,
  onCarouselChange,
  type = 'default',
  hideButton = false,
  offerIcon = false,
  transparentBackground = false,
  onClick,
  contentHeight,
  thumbnailHeight,
  arrows = false,
  isShowPayBtn = false,
  myOfferText
}: CardProps) {
  const router = useRouter()

  // const [currIndex, setcurrIndex] = useState(0)

  // const [isShowArrow, setisShowArrow] = useState<boolean>(false)

  // const [previewSrc, setpreviewSrc] = useState<string>('')

  // const [previewSrcIndex, setpreviewSrcIndex] = useState<number>(0)

  const afterChange = (index: any) => {
    onCarouselChange && onCarouselChange()
    // setcurrIndex(index)
  }

  return (
    <div
      onClick={() => onClick && data && onClick(data.id)}
      className={`card_item ${styles.card} ${type === 'simple' ? `${styles.simple}` : ''
        } ${offerIcon ? `${styles['offer-icon']}` : ''} ${onClick ? `${styles.click}` : ''
        } ${transparentBackground ? `${styles.transparent}` : ''}`}
    >
      {!data && <div>暂无数据</div>}

      {Boolean(type === 'my_offer') && (
        <div className={styles.my_offer_box}>
          <div className={styles.myOfferText}>{myOfferText}</div>
          <div className={styles.my_offer_price_box}>
            <div className={styles.my_offer_price}>￥{data && data.quotedPrice?.top}</div>
            {isShowPayBtn && <div className={styles.pay_btn}>支付</div>}
          </div>
          <img className={styles.my_offer_img} src={'/left_top_hold_.png'} />
        </div>
      )}

      {data && (
        <>
          <div
            className={`${styles.box} ${type === 'simple' ? styles.simple : ''
              }`}
            style={{
              padding: carousel ? '' : 0
            }}
          >
            <div className={styles.header}>
              <Avatar className={styles.avatar} src={data.creator.avatar} />
              <div className={styles.name}>{data.creator.name}</div>
            </div>
            <div
              className={styles.content}
              style={{
                height: contentHeight || '',
                overflow: contentHeight ? 'hidden' : '',
                paddingBottom: contentHeight ? '0' : ''
              }}
              dangerouslySetInnerHTML={{
                __html: data.content
              }}
            />
            {data.thumbnails && data.thumbnails.length > 0 && (
              <div
                className={`${styles.photos} ${!carousel ? styles.float : ''}`}
                style={{
                  height: thumbnailHeight || '',
                  marginTop: thumbnailHeight ? 0 : ''
                }}
              >
                {/* {isShowArrow && [
                  <div
                    key={1}
                    className={`${styles.left_arrow} ${styles.arrow}`}
                  >
                    <LeftOutlined />
                  </div>,
                  <div
                    key={2}
                    className={`${styles.right_arrow} ${styles.arrow}`}
                    onClick={() => {
                      let new_previewSrcIndex = previewSrcIndex + 1
                      setpreviewSrcIndex(
                        new_previewSrcIndex >= Number(data.thumbnails?.length)
                          ? 0
                          : new_previewSrcIndex
                      )
                      setpreviewSrc(
                        data.thumbnails
                          ? data.thumbnails[new_previewSrcIndex]
                          : ''
                      )
                    }}
                  >
                    <RightOutlined />
                  </div>
                ]} */}

                {carousel && (
                  <Carousel
                    draggable
                    adaptiveHeight
                    arrows={arrows}
                    prevArrow={<div className="prev"></div>}
                    nextArrow={<div className="next"></div>}
                    dots={{ className: styles.dots }}
                    afterChange={afterChange}
                  >
                    {/* {data.thumbnails.map((src, index) => {
                      return (
                        <div className={styles.photo} key={Math.random()}>
                          {index == currIndex && (
                            <Image.PreviewGroup>
                              {data.thumbnails?.map((item, index2) => {
                                console.log(currIndex, index2)

                                return (
                                  <Image
                                    width="100%"
                                    style={{
                                      display:
                                        currIndex == index2
                                          ? 'block'
                                          : 'none !important'
                                    }}
                                    key={index + index2}
                                    preview={{
                                      mask: '预览',
                                      visible: true,
                                      onVisibleChange: (
                                        visible,
                                        prevVisible
                                      ) => {
                                        console.log(
                                          visible,
                                          prevVisible,
                                          'visible, prevVisible'
                                        )
                                      }
                                    }}
                                    src={item}
                                  />
                                )
                              })}
                            </Image.PreviewGroup>
                          )}
                        </div>
                      )
                    })} */}

                    {data.thumbnails.map((src, index) => (
                      <div key={index} className={styles.photo}>
                        <Image
                          width="100%"
                          preview={
                            // false
                            photoPreview
                              ? {
                                maskClassName: styles.mask
                              }
                              : false
                          }
                          src={src}
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
                {!carousel && (
                  <>
                    {data.thumbnails.map((src, index) => (
                      <div
                        key={index}
                        className={styles.photo}
                        style={{
                          width:
                            data.thumbnails && data.thumbnails?.length > 1
                              ? data?.thumbnails?.length > 2
                                ? data.thumbnails.length > 4
                                  ? data.thumbnails.length > 6
                                    ? 68
                                    : 95
                                  : 95
                                : 145
                              : '',
                          height:
                            data.thumbnails && data.thumbnails?.length > 1
                              ? data?.thumbnails?.length > 2
                                ? data.thumbnails.length > 4
                                  ? data.thumbnails.length > 6
                                    ? 68
                                    : 95
                                  : 95
                                : 145
                              : ''
                        }}
                      >
                        <Image preview={photoPreview} src={src} />
                      </div>
                    ))}
                    {/* <Image.PreviewGroup>
                      <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                      />
                      <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                      />
                    </Image.PreviewGroup> */}
                  </>
                )}
              </div>
            )}
            <div
              className={styles.count}
              style={{
                paddingTop:
                  contentHeight &&
                    data.thumbnails &&
                    data.thumbnails.length === 0
                    ? 46
                    : 35
              }}
            >
              <Row gutter={12}>
                <Col>
                  <IconFont size={16} type="iconzhuanfafenxiang" />
                  <span className={styles.num}>{data.repostsCount}</span>
                </Col>
                <Col>
                  <IconFont size={16} type="iconpinglun" />
                  <span className={styles.num}>{data.commentsCount}</span>
                </Col>
                <Col>
                  <IconFont size={16} type="iconzan" />
                  <span className={styles.num}>{data.attitudesCount}</span>
                </Col>
              </Row>
            </div>
          </div>
          {type === 'default' && (
            <div className={styles.users}>
              <div className={styles.u}>
                Creator: <span>{data.creator.name}</span>
              </div>
              {data.holder && (
                <div className={styles.u}>
                  Holder: <span>{data.holder.name}</span>
                </div>
              )}
            </div>
          )}
          {type === 'default' && (
            <div className={styles.price}>
              {!data.quotedPrice?.top && !data.quotedPrice?.low && (
                <div className={styles.empty}>- 暂无报价 -</div>
              )}
              {data.quotedPrice?.top && !data.quotedPrice?.low && (
                <>
                  <div className={styles.txt}>（最高报价）</div>
                  <div className={styles.big}>
                    {formatMoney(data.quotedPrice.top, '¥ ')}
                  </div>
                </>
              )}
              {data.quotedPrice?.top && data.quotedPrice?.low && (
                <>
                  <div className={`${styles.line} ${styles.bold}`}>
                    <div className={styles.txt}>（报价）</div>
                    <div className={styles.p}>
                      {formatMoney(data.quotedPrice.top, '¥ ')}
                    </div>
                  </div>
                  <div className={styles.line}>
                    <div className={styles.txt}>（底价）</div>
                    <div className={styles.p}>
                      {formatMoney(data.quotedPrice.low, '¥ ')}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {type === 'default' && !hideButton && (
            <Button
              className={styles.btn}
              type="primary"
              block
              onClick={() => data && router.push(`/detail/${data.id}`)}
            >
              我要买
            </Button>
          )}
        </>
      )}
    </div>
  )
}
