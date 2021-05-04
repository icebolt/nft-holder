export interface MyCardsResult {
  current: number
  pageSize: number
  list: any[] | null
}

export default async function fetchMyCards(
  token: string,
  pageSize: number = 10,
  current: number = 1
): Promise<MyCardsResult> {
  const result = await fetch(
    `${process.env.API_BASE}/api/v1/user/token?pageSize=${pageSize}&current=${current}`,
    {
      headers: {
        authorization: token
      }
    }
  )
  if (!result.ok) {
    const error = new Error(result.statusText)
    error.info = await result.json()
    error.status = result.status
    throw error
  }
  return await result.json()
}
