import React from "react";

// Define the types for the country object
interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

// Add typing for props
interface CardProps {
  country: Country;
}

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <div className="country-header">
        <h3>{country.name}</h3>
      </div>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
};

export default Card;