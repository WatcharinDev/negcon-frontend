import AddpostButton from '@/components/community/addpost-button'
import React, { FunctionComponent } from 'react'

type Props = {
  children: React.ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      {children}
    
    </div>
  )
}

export default Layout