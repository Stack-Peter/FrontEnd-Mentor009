import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { MoonSolid, MoonOutline } from './Components/Moons'
import './styles.css'
import 'animate.css';

const Nav = () => {
    const { darkMod, setDarkMod } = React.useContext(GlobalContext);
    const handleClick = () => {
        darkMod ? setDarkMod(false) : setDarkMod(true);
        if (darkMod) {
            localStorage.setItem('darkMod', 'true');
        } else {
            localStorage.setItem('darkMod', 'false');
        }   
    }
    React.useEffect(() => {
        if (localStorage.darkMod === 'false') setDarkMod(true);
        if (localStorage.darkMod === 'true') setDarkMod(false);
    })
    return (
        <nav className={darkMod ? 'navDark' : 'nav'}>
            <div><h2 className='animate__jackInTheBox'>Where in the world?</h2></div>
            <div 
                className='svg'
                onClick={handleClick}>
                { darkMod ? <MoonSolid /> : <MoonOutline /> }
                <p>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Nav
