import NextAuth, {AuthOptions} from 'next-auth';

import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import {comparePasswords} from "@/crypt";
 
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';


export const  authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials:{
                email:{
                    label: 'Email',
                    type: 'text',
                },
                pass: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.pass){
                    throw new Error('Email and password required!')
                }
                const user = await prismadb.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });

                if (!user || !user.hashedPassword){
                    throw new Error('Email does not exist.');
                }
                const storedHash = '...'; // Retrieve stored hash from your database or storage
                const salt = 'pepper'; // The same salt used during hashing
                const hashAlgorithm = 'sha256'; // The same hash algorithm used during hashing
                const outputEncoding = 'hex'; // The same output encoding used during hashing
                const desiredHashLength = 12;
                const isCorrectPassword = await comparePasswords(credentials.pass, user.hashedPassword,salt,hashAlgorithm,outputEncoding,desiredHashLength);
                
                if(!isCorrectPassword){throw new Error('The password is not correct')}
                return user;
            }
        })
    ],
    pages: {
        signIn: '/auth',
    },
    debug: process.env.NODE_ENV == 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);