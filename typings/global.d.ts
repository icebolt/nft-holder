declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement
  const url: string
  export default url
}

declare module 'weibo-util' {
  export function id2Mid(id: string): string
  export function mid2Id(mid: string | number): string
  export function getUrl(mid: string, uid: string): string
  export function getMidUid(
    url: string
  ): {
    error?: string
    uid: string
    mid: string
  }
}

declare interface Error {
  name: string
  message: string
  stack?: string
  info?: unknown
  status?: number
}
