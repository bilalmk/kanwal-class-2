// data/country.ts

export type CountryData = {
    name: string;
    population: number;
    capital: string;
  };
  
  // Define the 'countries' object with country keys and 'CountryData' values.
  export const countries: Record<string, CountryData> = {
    pakistan: {
      name: 'Pakistan',
      population: 4343434,
      capital: 'Islamabad',
    },
    canada: {
      name: 'Canada',
      population: 38005238,
      capital: 'Ottawa',
    },
    japan: {
      name: 'Japan',
      population: 126476461,
      capital: 'Tokyo',
    },
    germany: {
      name: 'Germany',
      population: 83783942,
      capital: 'Berlin',
    },
    brazil: {
      name: 'Brazil',
      population: 211049527,
      capital: 'Brasília',
    },
    australia: {
      name: 'Australia',
      population: 25499884,
      capital: 'Canberra',
    },
  };
  