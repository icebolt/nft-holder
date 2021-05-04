import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'

const logoutHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse
) => {
  const { method, session } = req

  switch (method) {
    case 'POST': {
      session?.unset('token')
      await session?.save()
      res.status(200).end()
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(logoutHandler)
