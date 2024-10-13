import { Children } from 'react';

function Card({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <div className="country-header">
        <h2>{country.name}</h2>
      </div>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}

export default Card;