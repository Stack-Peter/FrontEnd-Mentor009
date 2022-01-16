import React from 'react'
import { GlobalContext } from '../GlobalContext'
import css from './Filter.css'

const Filter = () => {
    const { setFilter, setInputVal, setOptionVal } = React.useContext(GlobalContext)
    const handleChange = ({ target }) => {
        if (target.value !== '' || undefined) {
            setFilter(true)
            setInputVal(target.value)
        } else {
            setFilter(false)
        }
    }
    const handleSelect = ({ target }) => {
        if (target.value !== 'none' || undefined) {
            setOptionVal(target.value)
        }
    }
    return (
        <form id='countries' className="Form">
            <input onChange={handleChange} type="text" />
            <select onChange={handleSelect} id='countries'>
                <option value="none">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Filter
