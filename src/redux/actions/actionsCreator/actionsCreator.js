import actionTypes from "../actionTypes/actionTypes";

const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions,
});

export default loadQuestionsAction;
