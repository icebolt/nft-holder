import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import { StatDataType } from '../../../typings/card'

const cardStatHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<StatDataType>
) => {
  const { method, query } = req
  const { id } = query

  switch (method) {
    case 'GET': {
      const result = await fetch(
        `${process.env.API_BASE}/api/v1/stat/blog?bid=${id}`
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
      res.status(200).json({
        offerTotal: data.number,
        highPrice: data.max,
        averagePrice: data.average
      })
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(cardStatHandler)
