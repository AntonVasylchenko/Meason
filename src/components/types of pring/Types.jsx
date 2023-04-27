import React from 'react'
import Mybutton from '../../ui/Mybutton'
import Modal from '../../ui/modal/Modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper/core";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import "./types.scss"




SwiperCore.use([Pagination]);

const Types = () => {
    const [visible, setVisible] = React.useState(false);
    const [slides, setSlides] = React.useState([]);
    const cards = [
        {
            id: 1,
            name: "Thermal transfer",
            img: "/image/type1.png",
            info: "Applying withflock films",
            images: ["/image/type1.png", "/image/banner1.png", "/image/banner2.png"]
        },
        {
            id: 2,
            name: "silkscreen",
            img: "/image/type2.png",
            info: "silkscreen",
            images: ["/image/type2.png", "/image/banner3.png", "/image/banner4.png"]
        },
        {
            id: 3, name: "direct printing",
            img: "/image/type3.png",
            info: "Applying with textile printer",
            images: ["/image/type3.png", "/image/banner4.png", "/image/banner5.png"]
        }
    ]

    const showModal = (id) => {
        setVisible(!visible)
        let images = cards.filter(el => el.id === id);
        setSlides(images[0]["images"]);
    }

    return (
        <section>
            <div className='type-pring'>
                <h2 className='type-pring_title page-width'>TYPES OF PRINTING</h2>
                <div className="type-pring_container page-width">
                    {cards.map(el => {
                        return (
                            <div key={el.id} className='type-item'>
                                <h3 className='type-item_name'>{el.name}</h3>
                                <div className='type-item_image'>
                                    <img src={el.img} alt={el.name} />
                                </div>
                                <div className='type-item_footer'>
                                    <p className='type-item_footer-info'>
                                        {el.info}
                                    </p>
                                    <Mybutton onClick={() => { showModal(el.id) }}>Show print!</Mybutton>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{
                        clickable: true
                    }}
                >
                    {slides.length > 0 &&
                        slides.map((el, index) => {
                            return (
                                <SwiperSlide key={el + index}>
                                    <img src={el} alt="Type slide" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Modal>
        </section>
    )
}

export default Types