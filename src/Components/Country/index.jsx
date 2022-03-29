import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext';
import './styles.css'

const Country = () => {
    function transformJson(arr) {
        return arr.filter(i => i.name === params.id)
    }
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
                <div className={darkMod ? 'darkCountrie' : 'countrie'}>
                    <div className='content'>
                        <div className={darkMod ? 'darkImgCountry' : 'imgCountry'}>
                            <div className='wrapperBtn'>
                                <Link className={darkMod ? 'darkBtn' : 'btn'} to={'/'}>
                                    <button>Back</button>
                                </Link>
                            </div>
                            {countrie.flags.svg && <img src={countrie.flags.svg} />}
                        </div>
                        <div className={darkMod ? 'darkCountryInfo' : 'countryInfo'}>
                            <div>
                                {countrie.name && <h1>{countrie.name}</h1>}
                            </div>
                            <div className={darkMod ? 'darkCountryInfoUl' : 'countryInfoUl'}>
                                <ul className={darkMod ? 'darkCountryInfoLi' : 'countryInfoLi'}>
                                    <li><strong>Native Name: </strong>{countrie.nativeName && countrie.nativeName}</li>
                                    <li><strong>Population: </strong>{countrie.population && countrie.population}</li>
                                    <li><strong>Region: </strong>{countrie.region && countrie.region}</li>
                                    <li><strong>Sub Region: </strong>{countrie.subregion && countrie.subregion}</li>
                                    {countrie.capital && <li><strong>Capital: </strong>{countrie.capital}</li>}
                                </ul>
                                <ul className='countryInfoLi02'>
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
                                    <p><strong>Boder Countries:</strong></p> {
                                        countrie.borders.map((i, index) => (
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
