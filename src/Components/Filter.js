import React from 'react'
import { GlobalContext } from '../GlobalContext'
import svg from '../icons/search.svg'
import css from './Filter.css'

const Filter = () => {
    const { setFilterItens, inputVal, setInputVal, optionVal, setOptionVal } = React.useContext(GlobalContext)
    const handleChange = ({ target }) => {
        if (target.value !== '' || undefined) {
            setFilterItens(true)
            setInputVal(target.value)
            console.log('Ativei')
        } else {
            setFilterItens(false)
        }
    }
    const handleSelect = ({ target }) => {
        if (target.value !== 'none' || undefined) {
            setOptionVal(target.value)
        }
    }
    return (
        <form id='countries' className="Form">
            <input
                onChange={handleChange}
                type="text"
                placeholder='Search for a country...'
            />
            <img src={svg} />
            <select
                onChange={handleSelect}
                id='countries'
                value={optionVal}>
                <option value="none">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Filter
