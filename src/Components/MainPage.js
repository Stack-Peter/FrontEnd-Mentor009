import React from 'react'
import Nav from './Nav'
import Filter from './Filter'
import Countries from './Countries'
import { GlobalContext } from '../GlobalContext'
import css from './MainPage.css'

const MainPage = () => {
    const { darkMod } = React.useContext(GlobalContext);

    return (
        <div className={darkMod ? 'MainDark' : 'Main'}>
            <Filter />
            <Countries />
        </div>
    )
}

export default MainPage
