import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../lib/prisma';



export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credential:{
                number:{label: "Number", type: "number", placeholder: "+79011233212"},
                password: { laber: "Password", type: "password", placeholder: "Johntortule123"}
            },
            authorize: (credential) => {
                if(credential.number === "79011233212" && credential.password === "Johntortule123"){
                    return{
                        id: 2,
                        number: "79011233212",
                        password: "Johntortule123"
                    }

                }
                return null
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user}) => {
            if(user){
                token.id = user.id
            }
            return token
        },
        session: ({session,token}) => {
            if(token){
                session.id = token.id

            }
            return session
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    }
})