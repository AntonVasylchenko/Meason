import React from 'react'
import './banner.scss'
import Decor from "../../ui/svg/Decor"
const Banner = () => {
    return (
        <section className='banner' >
            <div className="banner_container page-width">
                <div className="banner_text">
                    <h1 className='banner-title'>Masons <mark>branding</mark>workshop</h1>
                </div>
                <div className="banner_decor">
                    <Decor />
                </div>
            </div>
        </section>
    )
}

export default Banner