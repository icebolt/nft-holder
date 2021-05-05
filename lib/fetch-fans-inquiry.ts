
export default async function fetchFansInquiry(
  uid: string,
  token: string,
  pageSize: number = 10,
  current: number = 1
): Promise<any> {

  const result = await fetch(
    `${process.env.API_BASE}/api/v1/user/selling?uid=1731422977&pageSize=${pageSize}&current=${current}`,
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
