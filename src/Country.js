import { useState, useEffect } from "react";
import "./App.css";

export default function CountrySelector({ countries }) {
  const countriesList = Object.keys(countries);
  const capitalsList = Object.values(countries);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCapital, setSelectedCapital] = useState([]);
  //   const [error, setError] = useState(false);

  const [list, setList] = useState(
    [...countriesList, ...capitalsList].sort(() => Math.random() - 0.5)
  );

  function retriveCountrynCapital(city) {
    if (countriesList.includes(city))
      setSelectedCountry([...selectedCountry, city]);
    else if (capitalsList.includes(city))
      setSelectedCapital([...selectedCapital, city]);
  }

  useEffect(() => {
    if (selectedCountry.length === 1 && selectedCapital.length === 1) {
      if (countries[selectedCountry[0]] === selectedCapital[0]) {
        setSelectedCountry([]);
        setSelectedCapital([]);
        setList(
          list.filter(
            (v) => !(v === selectedCountry[0] || v === selectedCapital[0])
          )
        );
        console.log("matched");
      } else {
        // setError(true);
      }
    }
  }, [selectedCountry, selectedCapital, countries, list]);

  return (
    <>
      {list.map((item) => (
        <button
          className={
            selectedCountry.indexOf(item) > -1 ||
            selectedCapital.indexOf(item) > -1
              ? "selected"
              : "not"
          }
          onClick={(e) => retriveCountrynCapital(e.target.value)}
          key={item}
          value={item}
        >
          {item}
        </button>
      ))}
    </>
  );
}
