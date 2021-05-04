import { NextApiHandler } from 'next'

import withSession from '../../../lib/session'
import { CardDataType } from '../../../typings/card'
import fetchWeibo from '../../../lib/fetch-weibo'

const cardHandler: NextApiHandler<CardDataType> = async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET': {
      try {
        const data = await fetchWeibo(id as string)
        res.status(200).json(data)
      } catch (error) {
        console.error(error)
        res.status(error.status).end()
      }
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(cardHandler)
