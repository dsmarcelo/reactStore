import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../lib/prisma';
import bcryp from 'bcrypt';

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) return null;

        const isMatch = await bcryp.compare(password, user.password);

        if (!isMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
};
