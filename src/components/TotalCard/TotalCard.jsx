import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "..";
import "./style.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const TotalCard = () => {
  const { isLoading, data } = useSelector((state) => state.covid.covidData);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader type="ellipsis" />
      </div>
    );
  }

  if (!data[0]) {
    return null;
  }

  let top = data.reduce((prev, current) => {
    if (+current.Recovered > +prev.Recovered) {
      return current;
    } else {
      return prev;
    }
  });

  var date = new Date(top.Date);

  return (
    <div className="total-card">
      <div className="total-card__title">Top recovered cases</div>
      <div className="total-card__quantity">{top.Recovered}</div>
      <div className="total-card__block">
        <div className="total-card__line"></div>
        <div className="total-card__date">
          {!data.length === 0
            ? null
            : date.getDate() + " " + monthNames[date.getMonth()]}
        </div>
      </div>
    </div>
  );
};
