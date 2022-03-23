import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { name, region, flags, area, population } = props.country;
    return (
        <div className='country-block'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h3>Region: {region}</h3>
            <h5>Area: {area}</h5>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;