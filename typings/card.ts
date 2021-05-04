/*
  0:未出售
  1:已售出
  2:转卖中
*/
export type CardStatus = 0 | 1 | 2
export interface CardDataType {
  id: string
  // 发布者
  creator: {
    id: string
    avatar: string
    name: string
  }
  // 所属人
  holder?: {
    id: string
    avatar?: string
    name: string
  }
  // 卡片内容
  content: string
  // 卡片图片
  thumbnails?: string[]
  // 转发数
  repostsCount: number
  // 评论数
  commentsCount: number
  // 点赞数
  attitudesCount: number
  // 报价
  quotedPrice?: {
    top: number
    low?: number
  }
}

export interface StatDataType {
  offerTotal: number
  highPrice: number
  averagePrice: number
}

export interface MyCardsItemType {
  hasOffer: boolean
  cardData: CardDataType
}
