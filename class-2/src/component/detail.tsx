import React from "react";
import Link from "next/link";

interface CountryDetailProps {
  name: string;
  population: number;
  capital: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({
  name,
  population,
  capital,
}) => {
  return (
    <div className="min-h-screen bg-slate-600 flex justify-center items-center p-4">
      <div className="bg-white text-black  rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
        <p className="text-lg mb-2">Population: {population.toLocaleString()}</p>
        <p className="text-lg mb-4">Capital: {capital}</p>

        <Link
          href="/"
          className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Back to Country List
        </Link>
      </div>
    </div>
  );
};

export default CountryDetail;
