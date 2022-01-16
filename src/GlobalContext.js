import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [data, setData] = React.useState(null)
    const [filter, setFilter] = React.useState(false)
    const [inputVal, setInputVal] = React.useState(false)
    const [optionVal, setOptionVal] = React.useState(false)
    const regexp = new RegExp(inputVal, "gi")
    React.useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(r => r.json())
            .then(json => setData(json))
    }, [])
    return (
        <GlobalContext.Provider value={{ data, setData, filter, setFilter, inputVal, setInputVal, optionVal, setOptionVal, regexp }}>
            {children}
        </GlobalContext.Provider>
    )
}
