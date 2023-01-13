import { NextApiRequest, NextApiResponse } from 'next';

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({
      code: 200,
      data: {
        id: 1,
        name: 'Theodorus Clarence',
        token: 'dummy-token',
      },
    });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
