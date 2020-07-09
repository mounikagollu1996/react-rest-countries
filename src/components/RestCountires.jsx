import React, { Component } from 'react';
import { CountryService } from '../services/CountryService';
import Display from './Display';
import CountryDisplay from './countryDisplay';
import { RegionService } from '../services/RegionService'
import RegionSelect from './RegionSelect';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const countryService = new CountryService();
const regionService = new RegionService();


class RestCountries extends Component {
    constructor(props) {
        super(props); 
            this.state = { 
                countries: [],
                isRegionSelected: false,
                currentCountry: '',
                isCountrySelected: false,
                countryData: [],
            };     
        this.hanldeOnChange = this.hanldeOnChange.bind(this); 
        this.handleShowDetails = this.handleShowDetails.bind(this);  
        this.handleShowBorderDetails = this.handleShowBorderDetails.bind(this);
        this.handleOnReset = this.handleOnReset.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
    };
    handleRegion(e) {
        const value = e.target.value;
        let countryData = this.state.countryData;
        let countries = countryService.getCountries();
        countryData = countries.filter(country => {
            if(country.region === value){
                return country;
            }
        });
        this.setState(() => ({countries: countryData,isRegionSelected: true}));
    };

    getUniqueRegions() {
        let regions = [];
        const countries = countryService.getCountries()
        regions = countries.map(country => {
            return country.region
        });
        const uniqueRegions = Array.from(new Set(regions));
        return uniqueRegions;
    }

    handleOnReset() {
        this.setState(() => ({isCountrySelected: false}));
    }
    handleShowBorderDetails(e) {
        const border = e.target.getAttribute('value')
        let countryData = this.state.countryData;
        let countries = countryService.getCountries();
        countryData = countries.filter(country => {
            if(country.alpha3Code === border){
                return country;
            }
        });
        this.setState(() => ({ countryData: countryData }));
        this.setState(() => ({isCountrySelected: true}));   
    }

    handleShowDetails(e) {
        const value = e.currentTarget.getAttribute('value');
        this.setState({currentCountry: value}, () => {
            let countryData = this.state.countryData;
            let countries = countryService.getCountries();
            countryData = countries.filter(country => {
                if(value === country.name){
                   return country;
                }
            });
            this.setState(() => ({ countryData: countryData }));
            this.setState(() => ({isCountrySelected: true}));
        })
    }

    hanldeOnChange(event) {
        const searchText = event.target.value;
        let countries = countryService.getCountries();
        let filteredCountries = countries.filter(function(country) {
            let name = country.name.toLowerCase();
            if(name.search(searchText) > -1){
                return country;
            }
            // return country.name.search(searchText) > -1;
        });
        this.setState(() => ({countries: filteredCountries}));
        
    }

    loadCountries() {
        this.setState(() => ({countries: countryService.getCountries()}));
    }

    componentDidMount() {
        this.loadCountries();
    }
    render() { 
        return ( 
            <div style={{width: '100%'}}>
                <Router>
                {this.state.isCountrySelected ?
                <Route
                path='/country'
                component={() => <CountryDisplay country={this.state.countryData}
                color={this.props.color}
                countries={this.state.countries}
                showBorderDetails={this.handleShowBorderDetails}
                onReset={this.handleOnReset}
                /> }
                />
                    
                :
                <div>
                    <RegionSelect
                    onRegionChanged={this.handleRegion}
                    regions={this.getUniqueRegions()}
                    color={this.props.color}
                    />
                    <Display color={this.props.color}
                    countries={this.state.countries}
                    showDetails={this.handleShowDetails}
                    onChange={this.hanldeOnChange}/>
                </div>    
                }   
            </Router>
            </div>    
        );
    }
}
 
export default RestCountries;