type BufferSource = ArrayBufferView | ArrayBuffer

type HeadersInit = Headers | string[][] | Record<string, string>
type BodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | string

export default async function fetcher(
  url: string,
  init?: { method?: string; headers?: HeadersInit; body?: BodyInit | null }
) {
  const res = await fetch(url, init)
  if (!res.ok) {
    const error = new Error(res.statusText)
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  try {
    return await res.json()
  } catch (error) {
    return {}
  }
}
