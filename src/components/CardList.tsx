import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from './Card'; 

const countries = [
  { name: "Germany", code: "DE", population: 81770900, region: "Europe", capital: "Berlin", flag: "https://flagcdn.com/w320/de.png" },
  { name: "United States of America", code: "US", population: 323947000, region: "Americas", capital: "Washington, D.C.", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Brazil", code: "BR", population: 206135893, region: "Americas", capital: "Brasilia", flag: "https://flagcdn.com/w320/br.png" },
  { name: "Iceland", code: "IS", population: 334300, region: "Europe", capital: "Reykjavik", flag: "https://flagcdn.com/w320/is.png" },
  { name: "Afghanistan", code: "AF", population: 27657145, region: "Asia", capital: "Kabul", flag: "https://flagcdn.com/w320/af.png" },
  { name: "Åland Islands", code: "AX", population: 28875, region: "Europe", capital: "Mariehamn", flag: "https://flagcdn.com/w320/ax.png" },
  { name: "Albania", code: "AL", population: 2886026, region: "Europe", capital: "Tirana", flag: "https://flagcdn.com/w320/al.png" },
  { name: "Algeria", code: "DZ", population: 40400000, region: "Africa", capital: "Algiers", flag: "https://flagcdn.com/w320/dz.png" }
];

function CardList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('All');

  const filteredCountries = countries
    .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(country => region === 'All' || country.region === region);

  return (
    <>
      <div className="controls">
  <div className="input-wrapper">
    <input 
      type="text" 
      placeholder="Search for a country..." 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
  </div>
  
  <div className="filter-wrapper">
    <select onChange={(e) => setRegion(e.target.value)}>
      <option value="All">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
    </select>
  </div>
</div>

      <main>
        <div className="country-grid">
          {filteredCountries.map(country => (
            <Card key={country.name} country={country} /> // Use Card component
          ))}
        </div>
      </main>
    </>
  );
}

export default CardList;