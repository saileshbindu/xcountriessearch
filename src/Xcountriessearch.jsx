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
      <div className="courtriesMain">
        <img src={imageURL} alt={imageAlt} />
        <h3>{title}</h3>
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

      {filteredCountries.length === 0 ? (
        <div>No result Found</div>
      ) : (
        <div className="countryCard">
          {filteredCountries.map((item) => (
            <CountryCard
              key={item.cca3}
              imageURL={item.flags.png}
              imageAlt={item.flags.alt}
              title={item.name.common}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Xcountriessearch;
