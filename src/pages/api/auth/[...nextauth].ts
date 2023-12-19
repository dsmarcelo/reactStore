import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../lib/prisma';
import bcryp from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (!user) return null;

        //Fast Login
        const mockUser = {
          name: 'Mario',
          email: 'mario@email.com',
        };

        if (
          credentials.email === mockUser.email &&
          credentials.password === '123'
        )
          return user;

        const isMatched = await bcryp.compare(
          user.password,
          credentials.password
        );

        if (isMatched) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
