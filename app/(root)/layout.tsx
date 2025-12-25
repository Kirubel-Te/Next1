import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <div>main Navbar</div>
      {children}
    </div>
  )
}

export default layout
