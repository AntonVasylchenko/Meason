import React from 'react'
import "./drawer.css"
const Drawer = ({ openDrawer, setOpenDrawer }) => {
    const [drawerItem, setDrawerItem] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    React.useEffect(() => {
        if (localStorage.getItem("cartItem")) {
            setDrawerItem(JSON.parse(localStorage.getItem("cartItem")));
        }
    }, [openDrawer])

    React.useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(drawerItem));
        setTotal(drawerItem.reduce((acc, elem) => acc + Number(elem.price.replace('$', '')), 0))
    }, [drawerItem])
    const removeItem = (key) => {
        setDrawerItem(prev => [...prev].filter(el => el.key !== key));
    }

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }



    return (
        <div className={openDrawer ? 'overlay show' : 'overlay'} onClick={toggleDrawer} >
            <div className={openDrawer ? 'drawer show' : 'drawer'} onClick={(event) => { event.stopPropagation() }}>
                <div className='drawer-header'>
                    <h1 className='drawer-title'> {drawerItem.length === 0 ? "Cart is Empty" : "our cart"} </h1>
                    <div className='drawer-close' onClick={toggleDrawer} >X</div>
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
                {drawerItem.length !== 0 && <div className='drawer-footer'>
                    <span>Total:</span>
                    <span>{total}:00 $</span>
                </div>
                }
            </div>
        </div>
    )
}

export default Drawer