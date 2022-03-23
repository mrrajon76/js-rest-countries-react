import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, region, flags, area, population } = props.country;
    return (
        <div className='country-block'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <p>Region: <span className='brand'>{region}</span></p>
            <p>Area: <span className='brand'>{area} km<sup>2</sup></span></p>
            <p>Population: <span className='brand'>{population}</span></p>
        </div>
    );
};

export default Country;