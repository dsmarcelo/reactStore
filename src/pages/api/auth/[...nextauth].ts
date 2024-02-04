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

        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/u/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        Sentry.captureMessage(`nextauth - res ${res}`);

        Sentry.addBreadcrumb({
          category: 'auth',
          message: 'Authenticated user ' + res.json(),
          level: 'info',
        });
        const user = res.json();
        console.log(user);

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
