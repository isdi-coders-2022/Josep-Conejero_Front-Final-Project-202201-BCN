import {
  loadQuestionsAction,
  deleteQuestionAction,
  addQuestionAction,
  updateQuestionAction,
} from "./actionsCreator";

describe("Given a loadQuestionsAction function", () => {
  describe("When it receives a questions array", () => {
    test("Then it should return an object with type property and the questions array", () => {
      const questions = [
        {
          question: "Pregunta 1",
          answer: "Respuesta 1",
        },
        {
          question: "Pregunta 2",
          answer: "Respuesta 2",
        },
      ];

      const expectedOutput = { type: "load-questions", questions: questions };
      const expectedAction = loadQuestionsAction(questions);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a deleteQuestionAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an object with type property and an id", () => {
      const idQuestionToRemoveMocked = 1;

      const expectedOutput = {
        type: "delete-question",
        idQuestion: idQuestionToRemoveMocked,
      };

      const expectedAction = deleteQuestionAction(idQuestionToRemoveMocked);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an addQuestionAction function", () => {
  describe("When it receives a question object", () => {
    test("Then it should return an object with type property and the question object", () => {
      const question = {
        question: "Pregunta 1",
        answer: "Respuesta 1",
      };

      const expectedOutput = { type: "add-question", question: question };
      const expectedAction = addQuestionAction(question);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an updateQuestionAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an object with type property and an id", () => {
      const idQuestionToRemoveMocked = 1;

      const expectedOutput = {
        type: "update-question",
        idQuestion: idQuestionToRemoveMocked,
      };

      const expectedAction = updateQuestionAction(idQuestionToRemoveMocked);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});
