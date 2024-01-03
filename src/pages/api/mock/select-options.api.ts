import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    await sleep(2000);
    res.status(200).json({
      code: 200,
      data: [
        {
          id: 1,
          name: 'Server Options 1',
        },
        {
          id: 2,
          name: 'Server Options 2',
        },
        {
          id: 3,
          name: 'Server Options 3',
        },
        {
          id: 4,
          name: 'Server Options 4',
        },
        {
          id: 5,
          name: 'Server Options 5',
        },
      ],
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
