import { combineReducers } from "redux";
import { nameReducer } from "./name.js";
import { scoreReducer } from "./score.js";
import { questionReducer } from "./question.js";

export const allReducers = combineReducers({
  name: nameReducer,
  score: scoreReducer,
  question: questionReducer
});
