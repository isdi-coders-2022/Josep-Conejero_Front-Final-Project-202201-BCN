import actionTypes from "../actionTypes/actionTypes";

export const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions,
});

export const loadOneQuestionAction = (idQuestion) => ({
  type: actionTypes.loadOneQuestion,
  idQuestion,
});

export const deleteQuestionAction = (idQuestion) => ({
  type: actionTypes.deleteQuestion,
  idQuestion,
});

export const addQuestionAction = (question) => ({
  type: actionTypes.addQuestion,
  question,
});

export const updateQuestionAction = (idQuestion) => ({
  type: actionTypes.updateQuestion,
  idQuestion,
});
