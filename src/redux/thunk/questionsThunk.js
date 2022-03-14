import loadQuestionsAction from "../actions/actionsCreator/actionsCreator";

export const loadQuestionsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const questionsList = await response.json();

  dispatch(loadQuestionsAction(questionsList.questions));
};

/* export default loadQuestionsListThunk; */
