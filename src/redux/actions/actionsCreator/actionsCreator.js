import actionTypes from "../actionTypes/actionTypes";

export const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions,
});

export const loadOneQuestionAction = (question) => ({
  type: actionTypes.loadOneQuestion,
  question,
});

export const deleteQuestionAction = (idQuestion) => ({
  type: actionTypes.deleteQuestion,
  idQuestion,
});

export const addQuestionAction = (question) => ({
  type: actionTypes.addQuestion,
  question,
});

export const updateQuestionAction = (question) => ({
  type: actionTypes.updateQuestion,
  question,
});

export const loadQuestionsListsAction = (questionsLists) => ({
  type: actionTypes.loadQuestionsLists,
  questionsLists,
});

export const loadOneQuestionsListAction = (questionsList) => ({
  type: actionTypes.loadOneQuestionsList,
  questionsList,
});

export const deleteQuestionsListAction = (idQuestionsList) => ({
  type: actionTypes.deleteQuestionsList,
  idQuestionsList,
});

export const addQuestionsListAction = (questionsList) => ({
  type: actionTypes.addQuestionsList,
  questionsList,
});

/* export const loginAction = (login) => ({
  type: actionTypes.login,
  login,
});
export const logOutAction = () => ({
  type: actionTypes.logout,
});

export const registerAction = (user) => ({
  type: actionTypes.register,
  user,
});

export const errorOnLoginAction = (error) => ({
  type: actionTypes.loginError,
  error,
});

export const errorOnRegisterAction = (error) => ({
  type: actionTypes.registerError,
  error,
}); */

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

/* export const loadProfileAction = (user) => ({
  type: actionTypes.loadProfile,
  user,
}); */

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const logoutUserAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});
