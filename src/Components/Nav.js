import React from 'react'
import svg from '../icons/moon.svg'
import css from './Nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div><h2>Where in the world?</h2></div>
            <div className='svg'>
                <img src={svg} />
                <p>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Nav
