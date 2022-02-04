import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import css from './Country.css'
import { Link } from 'react-router-dom'

const Country = () => {
    // {countrie[0].name.common}
    const btn = 'Back'
    const params = useParams()
    const { countrie, darkMod } = React.useContext(GlobalContext);

    if (countrie) console.log(countrie)

    return (
        <>
            {countrie &&
                <div>
                    <Link className='btn' to={'/'}>
                        <button>{btn}</button>
                    </Link>
                    <div className='Content'>
                        <div className='imgCountry'>
                            <img src={countrie.flags.svg && countrie.flags.svg} />
                        </div>
                        <div className='CountryInfo'>
                            <div>
                                <h1>{countrie.name && countrie.name}</h1>
                            </div>
                            <div className='CountryInfoUl'>
                                <ul className='CountryInfoLi'>
                                    <li><strong>Native Name: </strong>{countrie.languages[0].nativeName && countrie.languages[0].nativeName}</li>
                                    <li><strong>Population: </strong>{countrie.population && countrie.population}</li>
                                    <li><strong>Region: </strong>{countrie.region && countrie.region}</li>
                                    <li><strong>Sub Region: </strong>{countrie.subregion && countrie.subregion}</li>
                                    <li><strong>Capital: </strong>{countrie.capital && countrie.capital}</li>
                                </ul>
                                <ul>
                                    <li><strong>Top Level Domain: </strong>{countrie.topLevelDomain[0] && countrie.topLevelDomain[0]}</li>
                                    <li><strong>Currencies: </strong>{countrie.currencies[0].name && countrie.currencies[0].name}</li>{
                                        countrie.languages &&
                                        <li><strong>Languages: </strong>{
                                            countrie.languages.map((i) => (countrie.languages &&
                                                countrie.languages[countrie.languages.length - 1].name !== i.name ? i.name + ', ' : i.name + '.'
                                            ))
                                        }</li>}
                                </ul>
                            </div>{countrie.borders &&
                                <div className='spanContent'>
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
