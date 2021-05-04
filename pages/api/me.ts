import { NextApiResponse, NextApiRequest } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'
import { AccessTokenInfo, UserType } from '../../typings/user'

const meHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<UserType>
) => {
  const { method, session } = req

  switch (method) {
    case 'GET': {
      const sessionToken = session?.get<AccessTokenInfo>('token')
      if (sessionToken) {
        const result = await fetch(
          `${process.env.API_BASE}/api/v1/user/show?uid=${sessionToken.uid}`,
          { headers: { authorization: sessionToken.token } }
        )
        let data = null
        try {
          data = await result.json()
        } catch (error) {
          console.error(error)
        }
        if (!result.ok) {
          session?.unset('token')
          await session?.save()
          res.status(result.status).json(data)
          return
        }
        res.status(200).json({
          id: data.uid.toString(),
          name: data.screenName,
          avatar: data.avatar,
          gender: data.gender,
          credit: data.credit,
          isLoggedIn: true
        })
      } else {
        res.status(200).json({ isLoggedIn: false })
      }
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(meHandler)
