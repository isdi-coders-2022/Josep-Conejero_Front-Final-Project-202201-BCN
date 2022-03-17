import { loadQuestionsListThunk, loadOneQuestionThunk } from "./questionsThunk";

describe("Given a loadQuestionsListThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();

      await loadQuestionsListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneQuestionThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      /* const dispatch = jest.fn();
      const idQuestion = "1";

      const loadOneQuestion = loadOneQuestionThunk(idQuestion);

      await loadOneQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled(); */
    });
  });
});
