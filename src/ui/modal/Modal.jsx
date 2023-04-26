import React from 'react'
import "./modal.scss"
const Modal = ({ children, setVisible, visible }) => {
    const body = React.useRef(document.querySelector("body")).current;
    visible ? body.classList.add("hidden") : body.classList.remove("hidden")
    return (
        <div className={visible ? "modal show" : "modal"} onClick={()=> setVisible(!visible)}>
            <div className='modal-container' onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
    )
}

export default Modal