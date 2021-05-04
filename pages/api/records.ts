import { NextApiHandler } from 'next'

import fetchRecords from '../../lib/fetch-records'
import { RecordItemDataType, RecordItemType } from '../../typings/record'

const recordsHandler: NextApiHandler<RecordItemDataType[]> = async (
  req,
  res
) => {
  const { method, query } = req
  const { id, pageSize = 10, current = 1 } = query

  switch (method) {
    case 'GET': {
      try {
        const data = await fetchRecords(
          id as string,
          Number(pageSize),
          Number(current)
        )
        if (data.list) {
          res.status(200).json([
            ...data.list.map((item) => ({
              id: item.id.toString(),
              type: (item.type === 'PAYED' ? 1 : 0) as RecordItemType,
              expire: item.type === 'EXPIRE',
              time: item.time * 1000,
              price: item.amount * 1,
              user: {
                id: item.uid,
                name: item.name
              }
            }))
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

export default recordsHandler
