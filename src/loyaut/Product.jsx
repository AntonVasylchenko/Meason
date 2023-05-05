import React from 'react'
import "./product.css"
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import Button from "../ui/Mybutton"


const Product = ({ product,getCartItems }) => {

    const [color, setColor] = React.useState(product.color[0]);
    const [size, setSize] = React.useState(product.size[0]);
    const seletColor = (name) => {
        setColor(name)
    }
    const seletSize = (name) => {
        setSize(name)
    }

    function addToCart({ id, price, name,image }, oprion1, oprion2) {
        let cartItem = {
            key: id + oprion1 + oprion2,
            name: name,
            id: id,
            price: price,
            color: oprion1,
            size:oprion2,
            img: image,
            quantity: 1
        }
        getCartItems(cartItem);
    }

    return (
        <section>
            <Breadcrumbs>
                <span className='breadcrumbs-item breadcrumbs-devided'>/</span>
                <li className='breadcrumbs-item'>
                    <NavLink to={"/" + product.category}>{product.category}</NavLink>
                </li>
                <span className='breadcrumbs-item breadcrumbs-devided'>/</span>
                <span className='breadcrumbs-item last-item'>{product.name}</span>
            </Breadcrumbs>
            <div className='product'>
                <div className="product-container page-width">
                    <div className='product-media'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className='product-info'>
                        <h1 className='product-title'>{product.name}</h1>
                        <div className='product-price'>{product.price}</div>
                        <div className='product-description product-element'>
                            <h2>Description</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className='product-color product-element'>
                            <h2>Color</h2>
                            <div className='product-color_avalible'>
                                {product.color.map((el, index) => {
                                    return (
                                        <div onClick={() => seletColor(el)} key={index} className={color === el ? 'color_name _is-active' :'color_name'}>
                                            <span style={{ background: el }}></span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='product-size product-element'>
                            <h2>Size</h2>
                            <div className='product-color_size'>
                                {product.size.map((el, index) => {
                                    return (
                                        <div onClick={()=>seletSize(el)} key={index} className={size === el ? 'color_size _is-active' :'color_size'}>
                                            <span>{el}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Button onClick={() => { addToCart(product,color,size) }}>Buy</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product