import React from 'react'

function Mybutton({children, ...props}) {

  return (
    <div {...props} className='main-button' >
        {children}
    </div>
  )
}

export default Mybutton