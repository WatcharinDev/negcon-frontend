'use client'
import { SessionProvider } from "next-auth/react"
import { FunctionComponent } from "react"
type Props={
    children:React.ReactNode,
    session:any

}
 const NextAuthProvider:FunctionComponent<Props>= ({children,session})=> {
  return <SessionProvider session={session}>
    {children}
  </SessionProvider>
}
export default NextAuthProvider