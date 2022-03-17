import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import oneQuestionReducer from "./oneQuestionReducer";

const rootReducer = combineReducers({
  oneQuestion: oneQuestionReducer,
  questionsList: questionsReducer,
});

export default rootReducer;
