export interface RecordsResult {
  current: number
  pageSize: number
  list: any[] | null
  ownerId?: string
  ownerName?: string
  creatorId?: string
  creatorName?: string
}

export default async function fetchRecords(
  id: string,
  pageSize: number = 10,
  current: number = 1
): Promise<RecordsResult> {
  const result = await fetch(
    `${process.env.API_BASE}/api/v1/blog/events?bid=${id}&pageSize=${pageSize}&current=${current}`
  )
  if (!result.ok) {
    const error = new Error(result.statusText)
    error.info = await result.json()
    error.status = result.status
    throw error
  }
  return await result.json()
}
