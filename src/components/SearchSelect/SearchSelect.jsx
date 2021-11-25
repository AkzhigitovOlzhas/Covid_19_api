import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Loader } from "..";
import {
  covidActionsTypes,
  loadCountriesData,
  loadCovidData,
} from "../../store/covid/actions";
import "./style.css";

export const SearchSelect = () => {
  const { isLoading, data } = useSelector((state) => state.covid.countries);
  const country = useSelector((state) => state.covid.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountriesData()); 
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loader type="ellipsis" />;
  }

  return (
    <div className="select">
      <Select
        className="basic-single"
        classNamePrefix="select"
        isLoading={isLoading}
        defaultValue={country}
        onChange={(input) => {
          localStorage.setItem("country", JSON.stringify(input));
          dispatch({
            type: covidActionsTypes.SET_COUNRY,
            payLoad: input,
          });

          dispatch(loadCovidData(input));
        }}
        options={data.map((country) => ({
          label: country.Country,
          value: country.Slug,
        }))}
      />
    </div>
  );
};
