import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST')
    return res.status(200).json({
      accessToken: {
        value: 'fake-token',
        expiredAt: Date.now() / 1000 + 3600,
      },
      refreshToken: {
        value: 'fake-refresh-token',
        expiredAt: Date.now() / 1000 + 365 * 86400,
      },
    })

  return res.status(200).json({})
}
