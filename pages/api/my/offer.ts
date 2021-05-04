import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import { AccessTokenInfo } from '../../../typings/user'
import { MyOfferType } from '../../../typings/record'

const myOfferHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<MyOfferType>
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
        `${process.env.API_BASE}/api/v1/user/offer/biggest?bid=${id}`,
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
      if (!data.uid) {
        res.status(204).end()
        return
      }
      res.status(200).json({
        price: data.amount * 1,
        expire: data.time * 1000
      })
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(myOfferHandler)
