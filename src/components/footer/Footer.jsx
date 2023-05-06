import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import Logo from '../../ui/svg/Logo'
import Telegram from '../../ui/svg/Telegram'
import Instagram from '../../ui/svg/Instagram'
import Viber from '../../ui/svg/Viber'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container page-width'>
                <div className='footer-logo'>
                    <NavLink to="/Meason/"><Logo /></NavLink>
                </div>
                <div className='footer-info'>
                    <nav className='footer-info_nav'>
                        <ul className='footer-info_list'>
                            <li className='footer-info_item'>
                                <span className='footer-info_link'>Street: Lorem 122/22 </span>
                            </li>
                            <li className='footer-info_item'>
                                <a href="tel:+00000000000" className='footer-info_link'>+00000000000</a>
                            </li>
                            <li className='footer-info_item'>
                                <a href="mailto:lorem@gmail.com" className='footer-info_link'>lorem@gmail.com</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-nav'>
                    <nav className='footer-nav_nav'>
                        <ul className='footer-nav_list'>
                            <li className='footer-nav_item'> 
                                <Telegram/>
                            </li>
                            <li className='footer-nav_item'> 
                                <Instagram/>
                            </li>
                            <li className='footer-nav_item'> 
                                <Viber/>
                            </li>
                        </ul>
                    </nav>
                    <p className='footer-nav_copyright'>© 2020 – 2023 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer