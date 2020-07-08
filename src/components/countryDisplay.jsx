import React from 'react';

const CountryDisplay  = (props) => { 
    return(
        <div className="country-wrapper" style={props.color ? {color: 'white'} : {color: 'black'}}>
            <button className="back-button" onClick={props.onReset}>back</button>
            <div className="row d-flex flex-row flex-wrap m-auto mt-5" style={{width: '70%',justifyContent: 'space-between'}}>
                <div className="image-box">
                    <img src={props.country[0].flag} style={{width: 'inherit', height: 'inherit'}} alt="country flag"/>
                </div>
                <div className="description d-flex flex-column" style={{width: '40%',justifyContent: 'center', alignItems: 'center'}}>
                    <div className="content d-flex flex-row flex-wrap">
                        <div className="wrapper d-flex flex-column">
                            <h4>{props.country[0].name}</h4>
                            <p className="mb-0">Native Name: {props.country[0].nativeName}</p>
                            <p className="mb-0">Population: {props.country[0].population}</p>
                            <p className="mb-0">Region: {props.country[0].region}</p>
                            <p className="mb-0">Sub Region: {props.country[0].subRegion}</p>
                            <p className="mb-0">Capital: {props.country[0].capital}</p>
                        </div>
                        <div className="d-flex flex-column ml-5">
                            <p className="mb-0">Top Level Domain: {props.country[0].topLevelDomain}</p>
                            <p className="mb-0">Currencies: {props.country[0].currencies[0].code}</p>
                            <p className="mb-0">
                            Languages: 
                            {props.country[0].languages.map(language => (
                                <span>{language.name}</span>
                            ))}
                            </p>           
                        </div>
                    </div>
                    <div className="borders d-flex flex-row mt-5" style={{width: '100%',flexWrap: 'wrap'}}>
                        <span>Border Countries: </span>
                        <div className="d-flex flex-row flex-wrap">
                        {props.country[0].borders.map(border => (
                            <button style={{marginRight: '0.5rem', backgroundColor: '#2B3945', border: '1px solid #2B3945', border: '8px', width:'100px', color: 'white',marginTop: '1rem',boxShadow: '1px 2px 22px 4px rgba(5, 18, 29,0.75)'}} key={border} value={border} onClick={props.showBorderDetails}>{border}</button>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
};
export default CountryDisplay;