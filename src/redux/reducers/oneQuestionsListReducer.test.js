import oneQuestionsListReducer from "./oneQuestionsListReducer";

describe("Given a oneQuestionsListReducer function", () => {
  describe("When it's called with action type loadOneQuestionsList and passed a questionsList and an action", () => {
    test("Then it should return a questionsList", () => {
      const questionsList = { id: 1, listName: "Nombre 1" };
      const action = {
        type: "load-one-questionsList",
        questionsList,
      };

      const newState = oneQuestionsListReducer(questionsList, action);
      const expectedNewState = { id: 1, listName: "Nombre 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed a questionsList and an action with questionsList", () => {
    test("Then it should return a questionsList", () => {
      const questionsList = { id: 1, listName: "Nombre 1" };
      const action = {
        type: "load-one-questionsList",
        questionsList: questionsList,
      };

      const newState = oneQuestionsListReducer(questionsList, action);
      const expectedNewState = { id: 1, listName: "Nombre 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed an action and no questionsList", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsList = {};
      const action = {
        type: "load-one-questionsList",
        questionsList: questionsList,
      };

      const newState = oneQuestionsListReducer(questionsList, action);
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed a questionsList and no action", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsList = { id: 1, listName: "Nombre 1" };

      const newState = oneQuestionsListReducer(questionsList);
      const expectedNewState = { id: 1, listName: "Nombre 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed a questionsList and an empty action", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsList = { id: 1, listName: "Nombre 1" };
      const action = {};

      const newState = oneQuestionsListReducer(questionsList, action);
      const expectedNewState = { id: 1, listName: "Nombre 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed no action an no questionsList", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const newState = oneQuestionsListReducer();
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestionsList and passed empty action and empty questionsList", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsList = {};
      const action = {};

      const newState = oneQuestionsListReducer(questionsList, action);
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });
});
