import { useEffect } from "react";
import { useState } from "react";
import "./xcountriessearch.css";

const Xcountriessearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchVal, setsearchVal] = useState("");
  const countriesURL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(countriesURL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = countries.filter((item) =>
    item.name.common.includes(searchVal)
  );

  const CountryCard = ({ imageURL, imageAlt, title }) => {
    return (
      <div className="countryCard">
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchVal}
        placeholder="Search"
        onChange={(e) => setsearchVal(e.target.value)}
      />

<div className="courtriesMain">
          {filteredCountries.map((item) => (
            <CountryCard
              key={item.cca3}
              imageURL={item.flags.png}
              imageAlt={item.flags.alt}
              title={item.name.common}
            />
          ))}
        </div>
    </div>
  );
};

export default Xcountriessearch;
