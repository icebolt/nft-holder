import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import { AccessTokenInfo, UserStatDataType } from '../../../typings/user'

const myStatHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<UserStatDataType>
) => {
  const { method, session } = req

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  switch (method) {
    case 'GET': {
      const result = await fetch(`${process.env.API_BASE}/api/v1/stat/user`, {
        headers: {
          authorization: sessionToken.token
        }
      })
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
      res.status(200).json({
        boughtTotal: data.boughtNumber,
        boughtTotalPrice: data.boughtTotal,
        sellTotal: data.soldNumber,
        sellTotalPrice: data.soldTotal
      })
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(myStatHandler)
