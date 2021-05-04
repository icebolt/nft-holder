import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'

const loginHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse
) => {
  const { method, query, session } = req
  const { code, redirect } = query

  switch (method) {
    case 'GET': {
      const result = await fetch(
        `${process.env.API_BASE}/api/v1/login?code=${code}&redirect=${redirect}`
      )
      const data = await result.json()
      if (!result.ok) {
        session?.unset('token')
        res.status(result.status).json(data)
        return
      }
      session?.set('token', data)
      await session?.save()
      res.status(200).end()
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(loginHandler)
