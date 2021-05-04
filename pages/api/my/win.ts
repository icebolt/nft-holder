import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import { AccessTokenInfo } from '../../../typings/user'
import { WinResultType } from '../../../typings/record'

const sellingHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<WinResultType>
) => {
  const { method, query, session } = req
  const { id } = query

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  switch (method) {
    case 'GET': {
      const result = await fetch(
        `${process.env.API_BASE}/api/v1/user/order/blog?bid=${id}`,
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
      res.status(200).json(
        data
          ? {
              result: true,
              price: data.amount,
              expire: data.time * 1000,
              orderId: data.order_id
            }
          : { result: false }
      )
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(sellingHandler)
