import React from 'react';

const Display = (props) => {
   return (
       <React.Fragment>
           <form className="form-inline d-flex justify-content-center md-form form-sm">
                    <input className="search form-control form-control-sm" type="text" placeholder="Search for a country..."
                        aria-label="Search" onChange={props.onChange}/>
            </form>
           <table className="mt-5" style={props.color ? {color: 'white'} : {color: 'black'}}> 
            <tbody className="d-flex flex-wrap mx-auto" style={{width: '85%',justifyContent: 'space-between'}}>
                {props.countries.map((country,index) => (
                    <tr className="country-box" key={country.name} style={props.color ? {backgroundColor: '#2B3945'} : {backgroundColor: 'white'}} value={index} onClick={props.showDetails}>
                        <td><img alt="country flag" style = {{width: '270px', height: '150px', borderRadius: '8px 8px 0 0'}}src={country.flag}/></td>
                        <td className="pt-2 pl-3" style={{fontSize: '16px', fontWeight: 'bold'}}>{country.name}</td>
                        <td className="pl-3" style={{fontSize: '14px'}}>population: {country.population}</td>
                        <td className="pl-3">Region: {country.region}</td>
                        <td className="pl-3">capital: {country.capital}</td>
                    </tr>
                ))}
            </tbody>         
        </table>
       </React.Fragment>       
    );
};
export default Display;
