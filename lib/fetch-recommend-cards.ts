export interface RecommendCardsResult {
  current: number
  pageSize: number
  list: any[] | null
}

export default async function fetchRecommendCards(
  pageSize: number = 10,
  current: number = 1
): Promise<RecommendCardsResult> {
  const result = await fetch(
    `${process.env.API_BASE}/api/v1/recommend/boutique?pageSize=${pageSize}&current=${current}`
  )
  if (!result.ok) {
    const error = new Error(result.statusText)
    error.info = await result.json()
    error.status = result.status
    throw error
  }
  return await result.json()
}
