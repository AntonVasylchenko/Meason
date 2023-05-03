import React from 'react'
import "./collection.css"
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs';
import ScrollText from '../components/scrollText/ScrollText';


function Collection({ items = [], el }) {
  let currentCollection = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].category === el) {
      currentCollection.push(items[i]);
    }
  }


  return (
    <section>
      <Breadcrumbs>
        <span className='breadcrumbs-item breadcrumbs-devided'>/</span>
        <span className='breadcrumbs-item last-item'>{currentCollection[0]["category"]}</span>
      </Breadcrumbs>
      <h1 className='collection-title page-width'>{currentCollection[0]["category"]}</h1>
      <div className='collection-list page-width'>
        {currentCollection.map(el => {
          return (
            <div key={el.id} className='collection-item'>
              <h2 className='collection-item_name'>{el.name}</h2>
              <div className='collection-item_img'>
                <img src={el.image} alt={el.category} />
              </div>
              <div className='collection-item_btn'>
                <NavLink to={el.path.product}>View all </NavLink>
              </div>
            </div>
          )
        })}
      </div>
      <ScrollText>WE CAN DO</ScrollText>
    </section>
  )
}

export default Collection