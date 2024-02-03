import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Missing required fields' });
  }
  console.log('Fetching user...');
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        image: true,
      },
    });
    if (user) {
      console.log('user...', user);
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('isMatch - ', isMatch);
      if (isMatch) {
        res.status(200).json(exclude(user, 'password'));
      } else {
        res.status(401).end('Invalid credentials');
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function exclude(obj: { [key: string]: string | null }, key: string) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
