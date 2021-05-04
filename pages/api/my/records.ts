import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import fetchMyRecords from '../../../lib/fetch-my-records'
import { AccessTokenInfo } from '../../../typings/user'
import { MyRecordItemDataType, MyRecordItemType } from '../../../typings/record'

const recordsHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<MyRecordItemDataType[]>
) => {
  const { method, query, session } = req
  const { pageSize = 10, current = 1 } = query

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  switch (method) {
    case 'GET': {
      try {
        const data = await fetchMyRecords(
          sessionToken.token,
          Number(pageSize),
          Number(current)
        )
        if (data.list) {
          res.status(200).json([
            ...data.list.map((item) => {
              let type
              if (item.type === 'PAYING') {
                type = 0
              } else if (item.type === 'PAYED') {
                type = 1
              } else if (item.type === 'SOLD') {
                type = 2
              }
              return {
                id: item.id.toString(),
                type: type as MyRecordItemType,
                time: item.time * 1000,
                price: item.amount * 1,
                detailId: item.bid.toString()
              }
            })
          ])
          return
        }
        res.status(204).end()
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

export default withSession(recordsHandler)
