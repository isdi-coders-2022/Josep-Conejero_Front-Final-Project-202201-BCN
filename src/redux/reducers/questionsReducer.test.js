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
});
