import React from 'react'
import css from './Countries.css'
import { GlobalContext } from '../GlobalContext'

const Countries = () => {
    const { data, inputVal, filterItens, optionVal, regexp } = React.useContext(GlobalContext)
    // regexp.test(pais.name) another way to whrite pais.name.includes(inputVal)
    const paises = [];
    // Thinking about some way to have more options    if (filterItens) data && data.filter(pais => (inputVal === '') ? (optionVal !== '' && pais.region == optionVal ? paises.push(pais) : '') : '')
    if (filterItens)
        data && data.filter(pais => (regexp.test(pais.name)) ? ((optionVal === '' || pais.region == optionVal) ? paises.push(pais) : '') : '')
    if (paises.length >= 1) return (
        <div className='Countries'>
            {paises && paises.map((i, index) => (
                <div key={index} className='Country'>
                    <img src={i.flags.png} />
                    <h3>{i.name}</h3>
                    <ul>
                        <li><strong>Population: </strong>{i.population}</li>
                        <li><strong>Region: </strong>{i.region}</li>
                        <li><strong>Capital: </strong>{i.capital}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
    if (filterItens) {
        if (paises.length < 1) {
            return (
                <div className='Countries'>
                    <h1>Ops! Parecem não haver países em seu filtro...</h1>
                </div>
            )
        }
    }

    return (
        <div className='Countries'>
            {data && data.map((i, index) => (
                <div key={index} className='Country'>
                    <img src={i.flags.png} />
                    <h3>{i.name}</h3>
                    <ul>
                        <li><strong>Population: </strong>{i.population}</li>
                        <li><strong>Region: </strong>{i.region}</li>
                        <li><strong>Capital: </strong>{i.capital}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Countries
