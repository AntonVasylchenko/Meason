import React from 'react'
import './header.scss'
import Logo from '../../ui/svg/Logo'
import Telegram from '../../ui/svg/Telegram'
import Viber from '../../ui/svg/Viber'
import Instagram from '../../ui/svg/Instagram'
import Circle from '../../ui/Circle'
import Mybutton from '../../ui/Mybutton'
import Secondbutton from '../../ui/Secondbutton'

const Header = () => {
    return (
        <header className='header page-width'>
            <div className='header-left'>
                <Logo />
                <Circle>En</Circle>
                <Mybutton> <a href="tel:+380666225191">+380666225191</a></Mybutton>
            </div>
            <div className='header-center'>
                <p className='header-center-text main-text'>
                    High quality printing. Clothing and accessories branding.
                </p>
            </div>
            <div className='header-right'>
                <Circle><Instagram /></Circle>
                <Circle><Telegram /></Circle>
                <Circle><Viber /></Circle>
                <Secondbutton>Calculate price</Secondbutton>
            </div>
        </header>
    )
}

export default Header