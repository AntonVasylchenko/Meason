import React from 'react'
import './banner.scss'
import Decor from "../../ui/svg/Decor"
const Banner = () => {
    let imagesPath = ["../image/banner1.png", "../image/banner2.png", "../image/banner3.png", "../image/banner4.png", "../image/banner5.png", "../image/banner6.png"];
    const containerRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const observer = React.useRef(null)

    React.useEffect(() => {
        var options = {
            rootMargin: '0px',
            threshold: 0
        }

        var callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                setVisible(prev =>  !prev)
            } else {
                setVisible(prev =>  !prev)
            }
        };
        observer.current = new IntersectionObserver(callback,options);
        observer.current.observe(containerRef.current)
    },[observer])

    return (
        <section className={visible ? "banner isVisible" : "banner"} ref={containerRef} >
            <div className="banner_container page-width" >
                <div className="banner_text">
                    <h1 className='banner-title second-text'>Masons <mark>branding</mark>workshop</h1>
                </div>
                <div className="banner_decor">
                    <Decor />
                </div>
                {
                    imagesPath.map((el, index) => {
                        return <div key={index} className={`banner-image banner-image${index + 1}`}>
                            <img src={el} alt="Banner" loading='lazy' />
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Banner