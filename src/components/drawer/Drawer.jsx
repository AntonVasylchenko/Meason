import React from 'react'
import "./drawer.css"
const Drawer = ({ openDrawer, setOpenDrawer }) => {
    const [drawerItem, setDrawerItem] = React.useState([]);
    React.useEffect(() => {
        if (localStorage.getItem("cartItem")) {
            setDrawerItem(JSON.parse(localStorage.getItem("cartItem")));
        }
    }, [openDrawer])

    React.useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(drawerItem));

    }, [drawerItem])
    const removeItem = (key) => {
        setDrawerItem(prev => [...prev].filter(el => el.key !== key));
    }
    return (
        <div className={openDrawer ? 'overlay show'  : 'overlay' } onClick={() => { setOpenDrawer(!openDrawer) }} >
            <div className={openDrawer ? 'drawer show' : 'drawer' }onClick={(event) => { event.stopPropagation() }}>
                <div className='drawer-header'>
                    <h1 className='drawer-title'> {drawerItem.length === 0 ? "Cart is Empty" : "our cart"} </h1>
                    <div className='drawer-close' onClick={() => { setOpenDrawer(!openDrawer) }} >X</div>
                </div>
                <div className='drawer-body'>
                    {drawerItem.map(el => {
                        return (
                            <div key={el.key} className='drawer-body_item'>
                                <div className='item-img'>
                                    <img src={el.img} alt={el.name} />
                                </div>
                                <div className='item-info'>
                                    <h2 className='item-title'>{el.name}</h2>
                                    <span className='item-size'>Size: {el.size}</span>
                                    <span className='item-color'>Color: <span className='color-block' style={{ background: el.color }}></span></span>
                                    <span className='item-price'>Price: {el.price}</span>
                                </div>
                                <div className='item-remove' onClick={() => { removeItem(el.key) }}> X </div>
                            </div>
                        )
                    })}
                </div>
                <div className='drawer-footer'></div>
            </div>
        </div>
    )
}

export default Drawer