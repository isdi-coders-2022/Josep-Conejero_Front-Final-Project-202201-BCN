import { combineReducers } from "redux";

import oneQuestionReducer from "./oneQuestionReducer";
import questionsReducer from "./questionsReducer";
import oneQuestionsListReducer from "./oneQuestionsListReducer";
import questionsListsReducer from "./questionsListsReducer";

const rootReducer = combineReducers({
  oneQuestionData: oneQuestionReducer,
  questionsData: questionsReducer,
  oneQuestionsListData: oneQuestionsListReducer,
  questionsListsData: questionsListsReducer,
});

export default rootReducer;
