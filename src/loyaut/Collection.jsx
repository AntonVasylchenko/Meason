import React from 'react'

function Collection({ items = [], el }) {
  let currentCollection = [];
  for(let i = 0; i < items.length; i++) {
    if (items[i].category === el ) {
      currentCollection.push(items[i]);
    }
  }

  console.log(currentCollection);
  return (
    <section>
      <div className='collection-list page-width'>
          <div className='collection-item'>
            <h2>Name product</h2>
            <div className=''>
            here image
            </div>
            <div>
                here product
            </div>
          </div>
      </div>
    </section>
  )
}

export default Collection