import React from 'react'

function Secondbutton({ children, ...props}) {
    return (
        <div {...props} className='second-button'>
            {children}
        </div>
    )
}

export default Secondbutton