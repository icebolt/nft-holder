export default async function fetchWeibo(id: string) {
  const result = await fetch(
    `${process.env.API_BASE}/api/v1/weibo/content?bid=${id}`
  )
  // const result = await fetch(`https://m.weibo.cn/statuses/show?id=${id}`)
  if (!result.ok) {
    const error = new Error(result.statusText)
    error.info = await result.json()
    error.status = result.status
    throw error
  }
  return await result.json()
}
