import questionsReducer from "./questionsReducer";

describe("Given a questionsReducer function", () => {
  let arrayOfQuestions = [];
  beforeEach(() => {
    return (arrayOfQuestions = [
      {
        question: "pregunta 1",
        answer: "respuesta 1",
        id: 8356,
      },
      {
        question: "pregunta 2",
        answer: "respuesta 2",
        id: 2154,
      },
    ]);
  });

  describe("When it's invoked with a list of questions and loadQuestions type", () => {
    test("Then it should return the new state with the questions to load", () => {
      const questions = [];
      const action = { type: "load-questions", questions: arrayOfQuestions };
      const newState = questionsReducer(questions, action);

      expect(newState).toEqual(arrayOfQuestions);
    });
  });

  describe("When it receives an empty array of questions, and empty action", () => {
    test("Then it should return an empty array", () => {
      const questions = [];
      const action = {};

      const expectedReducer = questionsReducer(questions, action);

      expect(expectedReducer).toEqual([]);
    });
  });

  describe("When it's called with action type deleteQuestion and passed a matching id", () => {
    test("Then it should return a new state without the question with matching id", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];
      const idQuestionToDelete = 1;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [{ id: 2, question: "Pregunta 2" }];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed a non matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];
      const idQuestionToDelete = 3;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [...questions];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed no id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];

      const action = {
        type: "delete-question",
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [...questions];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed no question", () => {
    test("Then it should return a new state with empty questions", () => {
      const questions = [];
      const idQuestionToDelete = 1;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });
});
