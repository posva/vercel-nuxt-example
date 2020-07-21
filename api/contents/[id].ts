import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const id = req.query.id as string
  res.json({ message: 'hello', id })
}
