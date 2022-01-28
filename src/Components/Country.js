import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    // {countrie[0].name.common}
    const btn = '<-- Back'
    const params = useParams()
    const [countrie, setCountrie] = React.useState([])
    React.useEffect(() => {
        console.log(params)
        if (params) {
            fetch(`https://restcountries.com/v3.1/name/${params.id}`)
                .then(r => r.json())
                .then(json => setCountrie(json))
                .then(() => console.log(params.id, countrie[0]))
        }
    }, [params])

    return (
        <h1>{params.id}</h1>
    );
};

export default Country;
