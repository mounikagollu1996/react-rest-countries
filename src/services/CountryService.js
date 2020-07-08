const countries = require('./countries');

export class CountryService {
    getCountries() {
        return countries;
    }
}