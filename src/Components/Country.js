import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    // {countrie[0].name.common}
    const btn = '<-- Back'
    const params = useParams()
    const [countrie, setCountrie] = React.useState([])
    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${params.id}`)
            .then(r => r.json())
            .then(json => setCountrie(json))
            .then(() => console.log(params.id, countrie[0]))
    }, [params])

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <button>{btn}</button>
            </div>
            <div>
                {countrie[0].flags.png && <img src={countrie[0].flags.png} />}
            </div>
            <div>
                <h1>{countrie[0].name.common}</h1>
                <ul>
                    <li>Native Name: ?</li>
                    <li>Population: {countrie[0].population}</li>
                    <li>Region: {countrie[0].region}</li>
                    <li>Sub Region: {countrie[0].subregion}</li>
                    <li>Capital: {countrie[0].capital}</li>
                    <li>Top Level Domain: ?</li>
                    <li>Currencies: ?</li>
                    <li>Languages: ?</li>
                </ul>
            </div>
        </div>
    );
};

export default Country;
