import React from 'react'
import './header.scss'
import Logo from '../../ui/svg/Logo'
import Telegram from '../../ui/svg/Telegram'
import Viber from '../../ui/svg/Viber'
import Instagram from '../../ui/svg/Instagram'
import Circle from '../../ui/Circle'
import Mybutton from '../../ui/Mybutton'
import Secondbutton from '../../ui/Secondbutton'
import Open from '../../ui/svg/Open'
import Close from '../../ui/svg/Close'
import { NavLink } from "react-router-dom";

const Header = ({ openDrawer, setOpenDrawer }) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    const [scrollDirection, setScrollDirection] = React.useState("");
    const body = React.useRef(document.querySelector("body")).current;

    scroll ? body.classList.add("hidden") : body.classList.remove("hidden")
    const handleClickOpen = () => {
        setOpen(!open)
        setScroll(!scroll)
    }
    React.useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let pointDeleteAll = 30;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "hideHeader" : "showHeader";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            if (pointDeleteAll > scrollY) {
                setScrollDirection("");
            }
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);
    let clasess = `header ${scrollDirection}`

    return (
        <header className={`${clasess} page-width`}>
            <div className='header-left'>
                <NavLink to="/Meason/"><Logo /></NavLink>
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
                <Secondbutton onClick={()=>{setOpenDrawer(!openDrawer)}}>Cart</Secondbutton>
            </div>
            <div className='header-burger' onClick={handleClickOpen}>
                {!open ? <Open /> : <Close />}
            </div>
            <div className={open ? "header-mobile show" : "header-mobile hide"}>
                <p className='header-mobile_text main-text'>High quality printing. Clothing and accessories branding.</p>
                <Secondbutton onClick={()=>{setOpenDrawer(!openDrawer)}}>Cart</Secondbutton>
                <div className='header-mobile_social'>
                    <Circle><Instagram /></Circle>
                    <Circle><Telegram /></Circle>
                    <Circle><Viber /></Circle>
                </div>
            </div>
        </header>
    )
}

export default Header