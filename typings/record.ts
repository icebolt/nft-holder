import { UserType } from './user'

export type RecordItemType = 0 | 1
export type MyRecordItemType = 0 | 1 | 2

export const RecordItemTypeMap: { [key: number]: string } = {
  0: '报价',
  1: '购买'
}

export const MyRecordItemTypeMap: { [key: number]: string } = {
  0: '待支付',
  1: '购买成功',
  2: '出售成功'
}

export interface RecordItemDataType {
  id: string
  type: RecordItemType
  time: number
  user: Required<Pick<UserType, 'id' | 'name'>>
  price: number
  expire: boolean
}

export interface MyRecordItemDataType {
  id: string
  type: MyRecordItemType
  time: number
  price: number
  detailId: string
}

export interface MyOfferType {
  price: number
  expire: number
}

export interface SellDataType {
  id: string
  price: number
  name: string
}

export interface WinResultType {
  result: boolean
  price?: number
  expire?: number
  orderId?: string
}

export interface FinalDataType {
  id: string
  price: number
  time: number
}
