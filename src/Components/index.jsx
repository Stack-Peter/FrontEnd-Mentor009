import React from 'react'
import Filter from './Filter'
import Countries from './Countries'
import { GlobalContext } from '../GlobalContext'
import './styles.css'

const MainPage = () => {
    const { darkMod } = React.useContext(GlobalContext);

    return (
        <div className={darkMod ? 'mainDark' : 'main'}>
            <Filter />
            <Countries />
        </div>
    )
}

export default MainPage
