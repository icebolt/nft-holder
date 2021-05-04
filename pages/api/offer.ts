import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'
import { AccessTokenInfo } from '../../typings/user'

const offerHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse
) => {
  const { method, body, session } = req
  const { id, price } = body

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  switch (method) {
    case 'POST': {
      const result = await fetch(`${process.env.API_BASE}/api/v1/user/offer`, {
        method: 'POST',
        body: JSON.stringify({
          bid: id,
          value: price
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: sessionToken.token
        }
      })
      if (!result.ok) {
        const data = await result.json()
        res.status(result.status).json(data)
        return
      }
      res.status(200).end()
      break
    }
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(offerHandler)
