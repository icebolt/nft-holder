export interface AccessTokenInfo {
  token: string
  expires: number
  uid: string
}

export interface UserType {
  id?: string
  name?: string
  avatar?: string
  gender?: string
  credit?: number
  isLoggedIn: boolean
}

export interface UserStatDataType {
  boughtTotal: number
  boughtTotalPrice: number
  sellTotal: number
  sellTotalPrice: number
}
