import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [data, setData] = React.useState(false)
    const [country, setCountry] = React.useState(false)
    const [filterItens, setFilterItens] = React.useState(false)
    const [inputVal, setInputVal] = React.useState('')
    const [optionVal, setOptionVal] = React.useState('')
    const [darkMod, setDarkMod] = React.useState(false)
    const regexp = new RegExp(inputVal, "gi")
    React.useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(r => r.json())
            .then(json => setData(json))
    });
    return (
        <GlobalContext.Provider
            value={{
                data,
                setData,
                filterItens,
                setFilterItens,
                inputVal,
                setInputVal,
                optionVal,
                setOptionVal,
                regexp,
                darkMod,
                setDarkMod,
                country,
                setCountry
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
