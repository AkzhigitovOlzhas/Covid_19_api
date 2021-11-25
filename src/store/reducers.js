import { combineReducers } from "redux";
import { covidReducer as covid } from "./covid/reducer";

export const reducers = combineReducers({ covid });
