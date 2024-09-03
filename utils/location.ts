import { Country, City } from 'country-state-city';

export const countriesSet = Country.getAllCountries().map((c) => ({
  name: c.name,
  flag: c.flag,
  isoCode: c.isoCode,
}));

export const citiesSet = City.getAllCities().map((c) => ({
  name: c.name,
  countryCode: c.countryCode,
}));
