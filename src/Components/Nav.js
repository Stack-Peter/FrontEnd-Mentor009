import React from 'react'
import { GlobalContext } from '../GlobalContext'
import svg from '../icons/moon.svg'
import './Nav.css'

const Nav = () => {
    const { darkMod, setDarkMod } = React.useContext(GlobalContext);
    const handleClick = () => {
        darkMod ? setDarkMod(false) : setDarkMod(true);
        if (darkMod) {
            localStorage.setItem('darkMod', 'true');
            console.log(localStorage)
        } else {
            localStorage.setItem('darkMod', 'false');
            console.log(localStorage)
        }   
    }
    React.useEffect(() => {
        if (localStorage.darkMod === 'false') setDarkMod(true);
        if (localStorage.darkMod === 'true') setDarkMod(false);
    }, [])
    return (
        <nav className={darkMod ? 'navDark' : 'nav'}>
            <div><h2>Where in the world?</h2></div>
            {darkMod ? 
            <div className='svg'
                onClick={handleClick}>
                <img src={svg} />
                <p>Light Mode</p>
            </div>
            : 
            <div className='svg'
                onClick={handleClick}>
                <img src={svg} />
                <p>Dark Mode</p>
            </div>}
        </nav>
    )
}

export default Nav
