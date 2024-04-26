import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
                const data: User = credentials as User
                if (data) return data
                return null
            }
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.access_token = user?.access_token
                token.id = user?.id as number
                token.email=user?.email
                token.code=user?.code
                token.profile_img=user?.profile_img
                token.first_name=user?.first_name
                token.last_name=user?.last_name
                token.role_code=user?.role_code
                token.role_id=user?.role_id
            }
            return token
        },
        async session({ session, token, user }) {
            if (token) {
                session.user.access_token = token?.access_token
                session.user.id = token?.id as number
                session.user.email=token.email
                session.user.code=token.code
                session.user.profile_img=token.profile_img
                session.user.first_name=token.first_name
                session.user.last_name=token.last_name
                session.user.role_code=token.role_code
                session.user.role_id=token.role_id
            }
            return session
        },
        async redirect({ url, baseUrl }) {
            return "/community"
        },
    },
    pages: {
        signIn: "/",
    },
}