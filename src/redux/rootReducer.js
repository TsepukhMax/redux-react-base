import { combineReducers } from "@reduxjs/toolkit";
import { likesReducer } from "./likesReducer";

export const rootReducer = combineReducers({
  likesReducer
});