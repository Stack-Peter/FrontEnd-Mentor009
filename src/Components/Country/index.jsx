import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext';
import './styles.css'
import 'animate.css';

const Country = () => {
    function transformJson(arr) {
        return arr.filter(i => i.name === params.id)
    }
    const params = useParams()
    const { country, darkMod, setCountry } = React.useContext(GlobalContext);

    React.useEffect(() => {
        if (country === false) {
            fetch('https://restcountries.com/v2/all')
                .then(r => r.json())
                .then(arr => transformJson(arr))
                .then(data => setCountry(data[0]))
        }
    })
    
    return (
        <>
            {country &&
                <div className={darkMod ? 'darkCountry' : 'country'}>
                    <div className='content'>
                        <div className={darkMod ? 'darkImgCountry' : 'imgCountry'}>
                            <div className='wrapperBtn'>
                                <Link className={darkMod ? 'darkBtn' : 'btn'} to={'/'}>
                                    <button>Back</button>
                                </Link>
                            </div>
                            {country.flags.svg && <img src={country.flags.svg} alt=""/>}
                        </div>
                        <div className={`${darkMod ? 'darkCountryInfo' : 'countryInfo'} animate__zoomIn`}>
                            <div>
                                {country.name && <h1>{country.name}</h1>}
                            </div>
                            <div className={darkMod ? 'darkCountryInfoUl' : 'countryInfoUl'}>
                                <ul className={darkMod ? 'darkCountryInfoLi' : 'countryInfoLi'}>
                                    <li><strong>Native Name: </strong>{country.nativeName && country.nativeName}</li>
                                    <li><strong>Population: </strong>{country.population && country.population}</li>
                                    <li><strong>Region: </strong>{country.region && country.region}</li>
                                    <li><strong>Sub Region: </strong>{country.subregion && country.subregion}</li>
                                    {country.capital && <li><strong>Capital: </strong>{country.capital}</li>}
                                </ul>
                                <ul className='countryInfoLi02'>
                                    {country.topLevelDomain && <li><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</li>}
                                    {country.currencies && <li><strong>Currencies: </strong>{country.currencies[0].name}</li>}{
                                        country.languages &&
                                        <li><strong>Languages: </strong>{
                                            country.languages.map((i) => (country.languages &&
                                                country.languages[country.languages.length - 1].name !== i.name ? i.name + ', ' : i.name + '.'
                                            ))
                                        }</li>}
                                </ul>
                            </div>{country.borders &&
                                <div className={darkMod ? 'darkSpanContent' : 'spanContent'}>
                                    <p><strong>Boder Countrys:</strong></p> {
                                        country.borders.map((i, index) => (
                                            index <= 2 ? <span key={index}>{i}</span> : ''
                                        ))
                                    }
                                </div>}
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Country;
