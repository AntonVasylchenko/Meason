import React from 'react'
import "./product.css"
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';


const Product = ({ product }) => {
    console.log(product);
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
                        <h1>{product.name}</h1>
                        <div>here price</div>
                        <div>here description</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product