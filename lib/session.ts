import { NextApiHandler } from 'next'
import { withIronSession } from 'next-iron-session'

export default function withSession(handler: NextApiHandler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD || '',
    cookieName: 'nft-holder/session',
    cookieOptions: {
      secure: false
    }
  })
}
