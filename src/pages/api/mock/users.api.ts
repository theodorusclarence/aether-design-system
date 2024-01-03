import { NextApiRequest, NextApiResponse } from 'next';

export type User = {
  id: number;
  name: string;
  email: string;
  country: string;
};

const users: User[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  country: ['Indonesia', 'Malaysia', 'Singapore'][
    Math.floor(Math.random() * 3)
  ],
}));

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const pageSize = +(req.query.page_size as string) || 5;
    const pageNumber = +(req.query.page as string);
    const sort = req.query.sort as keyof User;
    const type = req.query.type as 'asc' | 'desc';
    const keyword = req.query.keyword as string;
    const country = req.query.country as string[];

    let data: User[];

    data = keyword
      ? users.filter(
          (user) => user.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1,
        )
      : users;

    data =
      country?.length > 0
        ? data.filter((user) => country.includes(user.country))
        : data;

    data = sort
      ? type === 'asc'
        ? data.sort((a, b) => (a[sort] > b[sort] ? 1 : -1))
        : data.sort((a, b) => (a[sort] > b[sort] ? -1 : 1))
      : data;

    const lastPage = Math.ceil(data.length / pageSize);

    data =
      pageSize && pageNumber
        ? data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
        : data;

    return setTimeout(
      () =>
        res.status(200).json({
          code: 200,
          status: 'OK',
          data,
          meta: {
            last_page: lastPage,
            total: data.length,
          },
        }),
      1000,
    );
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
