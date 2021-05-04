import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'
import { AccessTokenInfo } from '../../typings/user'
import fetchWeibo from '../../lib/fetch-weibo'
import fetchRecords from '../../lib/fetch-records'

const sellingHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<string[]>
) => {
  const { method, query, session } = req
  const { id } = query

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  try {
    const weibo = await fetchWeibo(id as string)
    const records = await fetchRecords(id as string)
    if (weibo && records) {
      const weiboData = weibo.data.data
      const creatorId = weiboData.user.id.toString()
      const ownerId = records.ownerId?.toString()
      if (creatorId !== sessionToken.uid && ownerId !== sessionToken.uid) {
        res.status(401).end()
        return
      }
    }
  } catch (error) {
    console.error(error)
    res.status(401).end()
    return
  }

  switch (method) {
    case 'GET': {
      const result = await fetch(
        `${process.env.API_BASE}/api/v1/user/blog/events?bid=${id}`,
        {
          headers: {
            authorization: sessionToken.token
          }
        }
      )
      let data = null
      try {
        data = await result.json()
      } catch (error) {
        console.error(error)
      }
      if (!result.ok) {
        res.status(result.status).json(data)
        return
      }
      res
        .status(200)
        .json(data.onSale ? data.onSale.map((item: any) => item.uid) : [])
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(sellingHandler)
