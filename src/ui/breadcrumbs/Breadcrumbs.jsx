import React from 'react'
import { NavLink } from 'react-router-dom'
import "./breadcrumbs.css"


function Breadcrumbs({children}) {
  return (
    <div className='breadcrumbs page-width'>
        <nav className='breadcrumbs-container'>
            <ul className='breadcrumbs-list'>
                <li className='breadcrumbs-item'>
                    <NavLink to="/Meason/">Home</NavLink>
                </li>
                {children}
            </ul>
        </nav>
    </div>
  )
}

export default Breadcrumbs