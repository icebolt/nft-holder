import { NextApiHandler } from 'next'

const userHandler: NextApiHandler = async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET': {
      const result = await fetch(
        `${process.env.API_BASE}/api/v1/user/show?uid=${id}`
      )
      const data = await result.json()
      res.status(200).json(data)
      break
    }
  }
}

export default userHandler
