import { covidActionsTypes } from "./actions";

const initialState = {
  country: JSON.parse(localStorage.getItem("country")) || {
    label: "Kyrgyzstan",
    value: "kyrgyzstan",
  },
  countries: { isLoading: true, data: [] },
  covidData: { isLoading: true, data: [] },
};

export const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case covidActionsTypes.SET_COUNRY:
      return { ...state, country: action.payLoad };
    case covidActionsTypes.SET_COUNRIES:
      return { ...state, countries: action.payLoad };
    case covidActionsTypes.SET_COVID_DATA:
      return { ...state, covidData: action.payLoad };
    default:
      return state;
  }
};
