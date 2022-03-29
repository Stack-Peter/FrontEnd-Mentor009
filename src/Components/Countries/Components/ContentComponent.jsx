import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'

const ContentComponent = ({ paises, data, darkMod}) => {
  const { setCountrie } = React.useContext(GlobalContext);
  let countriesToShow;
  paises ? (countriesToShow = paises) : (countriesToShow = data);
  return (
    <div className={darkMod ? 'darkCountries' : 'countries'}>
    {countriesToShow && countriesToShow.map((i, index) => (
        <Link key={index} to={`/countries/${i.name}`} onClick={() => setCountrie(i)}>
            <div key={index} className={darkMod ? 'darkCountry' : 'country'}>
                <img src={i.flags.png} alt=""/>
                <h3>{i.name}</h3>
                <ul>
                    <li><strong>Population: </strong>{i.population}</li>
                    <li><strong>Region: </strong>{i.region}</li>
                    <li><strong>Capital: </strong>{i.capital}</li>
                </ul>
            </div>
        </Link>
    ))} 
</div>
  )
}

export default ContentComponent