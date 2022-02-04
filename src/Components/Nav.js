import React from 'react'
import { GlobalContext } from '../GlobalContext'
import svg from '../icons/moon.svg'
import css from './Nav.css'

const Nav = () => {
    const { darkMod, setDarkMod } = React.useContext(GlobalContext);
    const handleClick = () => {
        darkMod ? setDarkMod(false) : setDarkMod(true)
        console.log('Ativado')
    }
    return (
        <nav className={darkMod ? 'navDark' : 'nav'}>
            <div><h2>Where in the world?</h2></div>
            <div className='svg'
                onClick={handleClick}>
                <img src={svg} />
                <p>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Nav
