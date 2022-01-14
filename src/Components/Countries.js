import React from 'react'
import css from './Countries.css'
const Countries = () => {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(r => r.json())
            .then(json => setData(json))
    }, [])

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
