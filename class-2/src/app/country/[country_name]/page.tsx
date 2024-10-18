import { countries } from '@/data/country';
import CountryDetail from '@/component/detail';

export function generateStaticParams() {
  // Generate static paths for each country
  return Object.keys(countries).map((country_name) => ({
    country_name,
  }));
}

export default function CountryPage({ params }: { params: { country_name: string } }) {
  const { country_name } = params;

  // Ensure the key from the URL exists in the countries object
  const countryData = countries[country_name];

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Country not found</h1>
      </div>
    );
  }

  return (
    <CountryDetail
      name={countryData.name}
      population={countryData.population}
      capital={countryData.capital}
    />
  );
}
