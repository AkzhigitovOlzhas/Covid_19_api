import React from "react";
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

export const OneDayCovidCard = ({ data }) => {
  var date = new Date(data.Date);
  return (
    <div className="covid-card">
      <div className="covid-card__date">
        {date.getDate() + " " + monthNames[date.getMonth()]}
      </div>
      <div className="covid-card__info">
        <div className="covid-card__block">
          <div className="covid-card__text">Active</div>
          <div className="covid-card__badge">{data.Active}</div>
        </div>
        <div className="covid-card__block">
          <div className="covid-card__text">Deaths</div>
          <div className="covid-card__badge">{data.Deaths}</div>
        </div>
        <div className="covid-card__block">
          <div className="covid-card__text">Confirmed</div>
          <div className="covid-card__badge">{data.Confirmed}</div>
        </div>
        <div className="covid-card__block">
          <div className="covid-card__text">Recovered</div>
          <div className="covid-card__badge">{data.Recovered}</div>
        </div>
      </div>
    </div>
  );
};
