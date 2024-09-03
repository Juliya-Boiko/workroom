export interface ICountry {
  name: string;
  flag: string;
  isoCode: string;
}

export interface ICity {
  name: string;
  countryCode: string;
}
