import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: 'Credentials',

      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'email@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const user = await fetch(`${process.env.NEXTAUTH_URL}/api/u/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }).then((res) => res.json());

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
});
