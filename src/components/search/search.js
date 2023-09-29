import { AsyncPaginate } from "react-select-async-paginate";
import { useEffect, useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
        `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          // setPlaceholder(`Searching for "${inputValue}"...`);
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div className="flex justify-around items-center p-3">
      <div className="uppercase font-extrabold text-3xl text-slate-100">
𝕎𝕖𝕒𝕥𝕙𝕖𝕣𝕚𝕒.</div>
      <AsyncPaginate
        className="w-3/6"
        placeholder="Search for a city  "
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
    
  );
};

export default Search;
