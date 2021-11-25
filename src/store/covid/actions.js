export const covidActionsTypes = {
  SET_COUNRY: "SET_COUNRY",
  SET_COUNRIES: "SET_COUNRIES",
  SET_COVID_DATA: "SET_COVID_DATA",
};

export const loadCovidData = (country) => (dispatch) => {
  dispatch({
    type: covidActionsTypes.SET_COVID_DATA,
    payLoad: { isLoading: true, data: [] },
  });
  fetch(
    `https://api.covid19api.com/total/dayone/country/${country.value}?count=10`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.reverse();
      data.length = 5;
      dispatch({
        type: covidActionsTypes.SET_COVID_DATA,
        payLoad: { isLoading: false, data },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const loadCountriesData = () => (dispatch) => {
  dispatch({
    type: covidActionsTypes.SET_COUNRIES,
    payLoad: { isLoading: true, data: [] },
  });
  fetch("https://api.covid19api.com/countries")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: covidActionsTypes.SET_COUNRIES,
        payLoad: { isLoading: false, data },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
