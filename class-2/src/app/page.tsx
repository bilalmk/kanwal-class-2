import Link from 'next/link';
import { countries } from '@/data/country';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">Country List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Object.keys(countries).map((key) => (
          <li key={key} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <Link href={`/country/${key}`}>
              <div className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                {countries[key].name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
