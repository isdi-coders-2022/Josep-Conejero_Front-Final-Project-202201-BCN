import { loadQuestionsAction } from "./actionsCreator";

describe("Given a loadQuestionsAction function", () => {
  describe("When it receives a question object", () => {
    test("Then it should return an object with type property and the question object", () => {
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
