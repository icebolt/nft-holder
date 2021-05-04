import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../../lib/session'
import fetchMyCardss from '../../../lib/fetch-my-cards'
import { AccessTokenInfo } from '../../../typings/user'
import { MyCardsItemType } from '../../../typings/card'

const recordsHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<MyCardsItemType[]>
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
        const data = await fetchMyCardss(
          sessionToken.token,
          Number(pageSize),
          Number(current)
        )
        if (data.list) {
          res.status(200).json([
            ...data.list.map((item: any) => ({
              hasOffer: item.type === 'ONSALE',
              cardData: {
                id: item.data.data.id,
                creator: {
                  id: item.data.data.user.id.toString(),
                  avatar: item.data.data.user.profile_image_url,
                  name: item.data.data.user.screen_name
                },
                content: item.data.data.text,
                thumbnails: item.data.data.pics
                  ? item.data.data.pics.map((item: any) => item.url)
                  : [],
                repostsCount: item.data.data.reposts_count,
                commentsCount: item.data.data.comments_count,
                attitudesCount: item.data.data.attitudes_count
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

export default withSession(recordsHandler)
