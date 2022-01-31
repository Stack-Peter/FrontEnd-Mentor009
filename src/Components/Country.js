import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    // {countrie[0].name.common}
    const btn = '<-- Back'
    const params = useParams()
    const [countrie, setCountrie] = React.useState([])
    const simpleArray = [];
    React.useEffect(() => {
        console.log(params.id)
        if (params.id) {
            fetch('https://restcountries.com/v2/all')
                .then(r => r.json())
                .then(json => simpleArray.push(json))
                .then(() => (simpleArray.filter(pais => pais.name == params.id ? console.log(pais) : '')))
        }
    }, [])

    return (
        <>
            <div>
            </div>
        </>
    );
};

export default Country;
