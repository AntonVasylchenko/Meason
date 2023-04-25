import React from 'react'
import "./types.scss"
import Mybutton from '../../ui/Mybutton'

const Types = () => {
    const cards = [
        {
            id: 1, name: "Thermal transfer", img: "/image/type1.png", info: "Applying withflock films"
        },
        {
            id: 2, name: "silkscreen", img: "/image/type2.png", info: "silkscreen"
        },
        {
            id: 3, name: "direct printing", img: "/image/type3.png", info: "Applying with textile printer"
        }
    ]
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
                                    <Mybutton>Lets print!</Mybutton>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Types