import loadQuestionsListThunk from "./questionsThunk";

describe("Given a loadQuestionsListThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadQuestionsAction action", async () => {
      const dispatch = jest.fn();

      await loadQuestionsListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
