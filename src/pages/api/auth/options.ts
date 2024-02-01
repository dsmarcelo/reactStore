import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcryp from 'bcrypt';

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
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
