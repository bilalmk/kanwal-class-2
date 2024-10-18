import { countries } from '@/data/country';
import CountryDetailCard from '@/component/detail';

export default function CountryPage({ params }: { params: { country: string } }) {
  const { country } = params;
  const countryData = countries[country as keyof typeof countries];

  if (!countryData) {
    return <h1>Country not found</h1>;
  }

  return (
    <CountryDetailCard
      name={countryData.name}
      population={countryData.population}
      capital={countryData.capital}
    />
  );
}
