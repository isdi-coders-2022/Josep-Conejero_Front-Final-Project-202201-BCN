import actionTypes from "../actions/actionTypes/actionTypes";

const questionsReducer = (questions = [], action = {}) => {
  let newQuestionsState;
  switch (action.type) {
    case actionTypes.loadQuestions:
      newQuestionsState = [...action.questions];
      break;
    default:
      newQuestionsState = [...questions];
  }
  return newQuestionsState;
};

export default questionsReducer;
