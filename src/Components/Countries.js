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
                    <p>{i.name}</p>
                    <ul>
                        <li>{i.population}</li>
                        <li>{i.region}</li>
                        <li>{i.capital}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Countries
