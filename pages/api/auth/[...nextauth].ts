import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/src/lib/prisma';
import { Adapter } from 'next-auth/adapters';
import EmailProvider from 'next-auth/providers/email';
import { nodeMailerOptionsYahoo } from '@/lib/nodemailer';
import nodemailerTransporterYAHOO from '@/lib/nodemailer';

// Define the authConfig with proper type assertion
export const authConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    EmailProvider({
      server: nodeMailerOptionsYahoo,
      from: nodeMailerOptionsYahoo.from,
      sendVerificationRequest: async ({ identifier: email, url, provider }) => {
        try {
          await nodemailerTransporterYAHOO.sendMail({
            to: email,
            from: provider.from,
            subject: 'Your sign-in link for ...',
            text: `Sign in to your account: ${url}`,
            html: `<p>Sign in to your account: <a href="${url}">Click here to Sign In</a></p>`,
          });
        } catch (error) {
          console.error('Error sending verification email:', error);
          throw new Error('Error sending verification email');
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
};

export default NextAuth(authConfig);
