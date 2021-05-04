import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'

import withSession from '../../lib/session'
import { AccessTokenInfo } from '../../typings/user'
import { PaymentUrlType } from '../../typings/payment'

const paymentHandler = async (
  req: NextApiRequest & { session?: Session },
  res: NextApiResponse<PaymentUrlType>
) => {
  const { method, body, session } = req
  const { orderId, returnUrl } = body

  const sessionToken = session?.get<AccessTokenInfo>('token')
  if (!sessionToken) {
    res.status(401).end()
    return
  }

  switch (method) {
    case 'POST': {
      const result = await fetch(`${process.env.API_BASE}/api/v1/payment/url`, {
        method: 'POST',
        body: JSON.stringify({
          order_id: orderId,
          return_url: returnUrl
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
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
      res.status(200).json({ paymentUrl: data.url })
      break
    }
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withSession(paymentHandler)
