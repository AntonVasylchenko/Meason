import React from 'react'
import './banner.scss'
import Decor from "../../ui/svg/Decor"
const Banner = () => {

    let imagesPath = ["/image/banner1.png","/image/banner2.png","/image/banner3.png","/image/banner4.png", "/image/banner5.png","/image/banner6.png"]
    return (
        <section className='banner' >
            <div className="banner_container page-width">
                <div className="banner_text">
                    <h1 className='banner-title second-text'>Masons <mark>branding</mark>workshop</h1>
                </div>
                <div className="banner_decor">
                    <Decor />
                </div>
                {
                    imagesPath.map((el,index)=> {
                        return <div key={index} className={`banner-image banner-image${index+1}`}>
                            <img src={el} alt="Banner" loading='lazy' />
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Banner