import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCovidData } from "../../store/covid/actions";
import { OneDayCovidCard } from "..";
import { Loader } from "..";

export const CardList = () => {
  const { isLoading, data } = useSelector((state) => state.covid.covidData);
  const country = useSelector((state) => state.covid.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCovidData(country));
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {!data.message ? (
        data.map((data) => <OneDayCovidCard key={data.Date} data={data} />)
      ) : (
        <div>Error loading data</div>
      )}
    </>
  );
};
