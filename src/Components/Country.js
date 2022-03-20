import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import './Country.css'
import { Link } from 'react-router-dom'

const Country = () => {
    function transformJson(arr) {
        return arr.filter(i => i.name === params.id)
    }
    const btn = 'Back'
    const params = useParams()
    const { countrie, darkMod, setCountrie } = React.useContext(GlobalContext);

    React.useEffect(() => {
        if (countrie === false) {
            fetch('https://restcountries.com/v2/all')
                .then(r => r.json())
                .then(arr => transformJson(arr))
                .then(data => setCountrie(data[0]))
        }
    }, [])
    
    return (
        <>
            {countrie &&
                <div className={darkMod ? 'DarkCountrie' : 'Countrie'}>
                    <Link className={darkMod ? 'DarkBtn' : 'btn'} to={'/'}>
                        <button>{btn}</button>
                    </Link>
                    <div className='Content'>
                        <div className={darkMod ? 'darkImgCountry' : 'imgCountry'}>
                            {countrie.flags.svg && <img src={countrie.flags.svg} />}
                        </div>
                        <div className={darkMod ? 'darkCountryInfo' : 'CountryInfo'}>
                            <div>
                                {countrie.name && <h1>{countrie.name}</h1>}
                            </div>
                            <div className={darkMod ? 'darkCountryInfoUl' : 'CountryInfoUl'}>
                                <ul className={darkMod ? 'darkCountryInfoLi' : 'CountryInfoLi'}>
                                    <li><strong>Native Name: </strong>{countrie.nativeName && countrie.nativeName}</li>
                                    <li><strong>Population: </strong>{countrie.population && countrie.population}</li>
                                    <li><strong>Region: </strong>{countrie.region && countrie.region}</li>
                                    <li><strong>Sub Region: </strong>{countrie.subregion && countrie.subregion}</li>
                                    {countrie.capital && <li><strong>Capital: </strong>{countrie.capital}</li>}
                                </ul>
                                <ul>
                                    {countrie.topLevelDomain && <li><strong>Top Level Domain: </strong>{countrie.topLevelDomain[0]}</li>}
                                    {countrie.currencies && <li><strong>Currencies: </strong>{countrie.currencies[0].name}</li>}{
                                        countrie.languages &&
                                        <li><strong>Languages: </strong>{
                                            countrie.languages.map((i) => (countrie.languages &&
                                                countrie.languages[countrie.languages.length - 1].name !== i.name ? i.name + ', ' : i.name + '.'
                                            ))
                                        }</li>}
                                </ul>
                            </div>{countrie.borders &&
                                <div className={darkMod ? 'darkSpanContent' : 'spanContent'}>
                                    <p><strong>Boder Countries:</strong> {
                                        countrie.borders.map((i, index) => (
                                            index <= 5 ? <span key={index}>{i}</span> : ''
                                        ))
                                    }</p>
                                </div>}
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Country;
