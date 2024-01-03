import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const errorRate = 0.2;

    return setTimeout(
      () =>
        Math.random() > +errorRate
          ? res.status(200).json({
              code: 200,
              data: {
                token: 'dummy-token',
              },
            })
          : res.status(500).json({
              message: `Simulasi error (${+errorRate * 100}% error rate)`,
            }),
      1000,
    );
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
