import {
  loadQuestionsAction,
  deleteQuestionAction,
} from "../actions/actionsCreator/actionsCreator";

export const loadQuestionsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const { questions } = await response.json();
  if (!response.ok) return;

  dispatch(loadQuestionsAction(questions));
};

export const deleteQuestionThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteQuestionAction(id));
  }
};

/* export default loadQuestionsListThunk; */

/* export const deleteQuestionThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "delete",
  });

  if (!response.ok) return;
  dispatch(deleteQuestionAction(id));
};

export const createTaskThunk = (name) => async (dispatch) => {
  const question = { name, done: false };
  const questionJson = JSON.stringify(question);
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "post",
    body: questionJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) return;
  const questionWithId = await response.json();
  dispatch(createQuestionAction(questionWithId));
}; */
