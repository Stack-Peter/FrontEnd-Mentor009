import React from 'react'
import css from './Countries.css'
import { GlobalContext } from '../GlobalContext'

const Countries = () => {
    const { data, filter, inputVal } = React.useContext(GlobalContext)
    const [filteredItem, setFilteredItem] = React.useState([])


    if (filter) {
        data.filter(pais => pais.name.includes(inputVal) ? setFilteredItem(pais) : '')
    } else if (filteredItem.length >= 1) {
        console.log(filteredItem)
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
