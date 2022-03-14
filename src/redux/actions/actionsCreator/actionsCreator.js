import actionTypes from "../actionTypes/actionTypes";

export const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions,
});
