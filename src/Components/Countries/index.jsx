import React from 'react'
import { GlobalContext } from '../../GlobalContext'
import ContentComponent from './Components/ContentComponent'
import './styles.css'

const Countries = () => {
    const { data, inputVal, filterItens, optionVal, regexp, darkMod } = React.useContext(GlobalContext);
    const paises = [];
    function handleFilteredItem(country) {
        if (inputVal === '') {
            if (optionVal !== '' && country.region === optionVal ) paises.push(country)
        } else {
            if (regexp.test(country.name)) {
                if (optionVal === '' || country.region === optionVal) paises.push(country);
            }
        }
    }
    if (filterItens) data && data.filter(country => handleFilteredItem(country));
    if (paises.length >= 1) return (
       <ContentComponent 
       paises={paises} 
       darkMod={darkMod} 
       />
    )
    if (filterItens) {
        if (paises.length < 0) {
            return (
                <div className={darkMod ? 'darkCountries' : 'countries'}>
                    <h1>Ops! Parecem não haver países em seu filtro...</h1>
                </div>
            )
        }
    }
    return (
        <ContentComponent 
       data={data}
       darkMod={darkMod} 
       />
    )
}

export default Countries
