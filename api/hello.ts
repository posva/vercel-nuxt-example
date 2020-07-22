import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  res.json({ message: 'hello' })
}
