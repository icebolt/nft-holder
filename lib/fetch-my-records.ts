export interface MyRecordsResult {
  current: number
  pageSize: number
  list: any[] | null
}

export default async function fetchMyRecords(
  token: string,
  pageSize: number = 10,
  current: number = 1
): Promise<MyRecordsResult> {
  const result = await fetch(
    `${process.env.API_BASE}/api/v1/user/events?pageSize=${pageSize}&current=${current}`,
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
