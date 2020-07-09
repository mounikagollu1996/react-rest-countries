import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const Display = (props) => {
   return (
       <React.Fragment>
           <form className="form justify-content-center md-form form-sm" style={props.color ? {} : {display: 'none'}}>
                    <input className="search form-control form-control-sm" type="search" placeholder="Search for a country..."
                        aria-label="Search" onInput={props.onChange}/>
            </form>
            <form className="form justify-content-center md-form form-sm" style={props.color ? {display: 'none'} : {}}>
                    <input className="search-box form-control form-control-sm" type="search" placeholder="Search for a country..."
                        aria-label="Search" onInput={props.onChange}/>
            </form>
           <table className="mt-5" style={props.color ? {color: 'white'} : {color: 'black'}}> 
            <tbody className="d-flex flex-wrap mx-auto" style={{width: '85%',justifyContent: 'space-between'}}>
                {props.countries.map(country => (
                        <tr><Link to={{pathname: `/country/${country.name}`}} className="country-box" key={country.name} style={props.color ? {backgroundColor: '#2B3945', color: 'white !important'} : {backgroundColor: 'white'}} value={country.name} onClick={props.showDetails}>
                            <td><img alt="country flag" style = {{width: '270px', height: '150px', borderRadius: '8px 8px 0 0'}}src={country.flag}/></td>
                            <td className="pt-2 pl-3" style={props.color ? {color: 'white',fontSize: '16px', fontWeight: 'bold'} : {color: 'black',fontSize: '16px', fontWeight: 'bold'}}>{country.name}</td>
                            <td className="pl-3" style={props.color ? {color: 'white',fontSize: '14px'} : {color: 'black',fontSize: '14px'}}>population: {country.population}</td>
                            <td className="pl-3" style={props.color ? {color: 'white',fontSize: '14px'} : {color: 'black',fontSize: '14px'}}>Region: {country.region}</td>
                            <td className="pl-3" style={props.color ? {color: 'white',fontSize: '14px'} : {color: 'black',fontSize: '14px'}}>capital: {country.capital}</td>
                        </Link> </tr> 
                ))}
            </tbody>         
        </table>
       </React.Fragment> 
    );
};
export default Display;
