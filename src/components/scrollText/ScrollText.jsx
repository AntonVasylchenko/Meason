import React from 'react'
import "./scroll-text.scss"
const ScrollText = ({children}) => {
    return (
        <div className="scroll-wrap">
            <div className='scroll-text scroll-text_first'>{children}</div>
            <div className='scroll-text scroll-text_second'>{children}</div>
        </div>
    )
}

export default ScrollText