import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export class RegionService {
    getCountries(region) {
        return new Promise((resolve,reject) => {
            axios
            .get(`${BASE_URL}/region/${region}`)
            .then(response => {
                if(response.data) {
                    console.log(response.data);
                }
            })
        })
    }
}