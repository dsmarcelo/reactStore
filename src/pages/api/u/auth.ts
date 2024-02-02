import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';

//TODO: Add image to user and remove password in the res.json

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        console.log(user);
        console.log(exclude(user, 'password'));
        return res.status(200).json(exclude(user, 'password'));
      }
    } else {
      res.status(401).json({ message: 'Incorrect credentials' });
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
