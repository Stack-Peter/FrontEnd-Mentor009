import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const Filter = () => {
    const { setFilterItens, setInputVal, optionVal, setOptionVal, darkMod } = React.useContext(GlobalContext)
    const handleChange = ({ target }) => {
        if (target.value !== '' || undefined) {
            setFilterItens(true)
            setInputVal(target.value)
        } else {
            setFilterItens(false)
        }
    }
    const handleSelect = ({ target }) => {
        if (target.value !== 'none' || undefined) {
            setFilterItens(true)
            setOptionVal(target.value)
        }
    }
    return (
        <form id='countries' className={darkMod ? 'darkForm' : 'form'}>
            <div className='containerSvg'>
            <input
                className={darkMod ? 'darkInput' : 'input'}
                onChange={handleChange}
                id="input01"
                type="text"
                placeholder='Search for a country...'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <select
                className={darkMod ? 'darkSelect' : 'select'}
                onChange={handleSelect}
                id='countries'
                value={optionVal}>
                <option value="">Filter by Region</option>
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
