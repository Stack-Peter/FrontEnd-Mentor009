import React from 'react'
import Filter from './Filter'
import Countries from './Countries'
import { GlobalContext } from '../GlobalContext'
import './MainPage.css'

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
