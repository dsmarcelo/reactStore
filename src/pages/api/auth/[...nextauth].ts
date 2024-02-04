import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';
import * as Sentry from '@sentry/browser';

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
        console.log('Sign In...');
        const { email, password } = credentials;

        Sentry.captureMessage('Fetching user');
        const user = await fetch(`${process.env.NEXTAUTH_URL}/api/u/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }).then((res) => res.json());

        if (user) {
          Sentry.captureMessage(`User found in ...nextauth: ${user}`);
          return user;
        } else {
          Sentry.captureMessage(`User NOT found in ...nextauth`);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
});
