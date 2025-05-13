import { combineReducers } from "@reduxjs/toolkit";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer
});