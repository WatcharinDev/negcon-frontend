import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    access_token: string
    id: number
    email: string
    code:string
    profile_img:string
    first_name:string
    last_name:string
    role_code:string
    role_id:number

  }

  interface Session {
    user: User
  }
 
}
declare module "next-auth/jwt" {
  interface JWT {
    access_token: string
    id: number
    email: string
    code:string
    profile_img:string
    first_name:string
    last_name:string
    role_code:string
    role_id:number
  }
}