import createUserReducer from "./createUserReducer";

describe("Given a createUserReducer", () => {
  describe("When it receives an array of users and and action create-user", () => {
    test("Then it should return the user", () => {
      const users = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];
      const newUser = { id: 3, username: "trufa" };
      const action = {
        type: "create-user",
        user: newUser,
      };

      const newState = createUserReducer(users, action);
      const expectedNewState = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
        { id: 3, username: "trufa" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it doesn't receives any action and any user", () => {
    test("Then it should return an empty user with isLogged = false", () => {
      /*   const newUser = createUserReducer();

      expect(newUser).toEqual({ isLogged: false }); */
    });
  });

  describe("When it receives a user and and action logout-user", () => {
    test("Then it should return the user", () => {
      /*    const user = { isLogged: true, username: "josep", password: "josep" };
      const expectedUser = {
        isLogged: false,
      };
      const action = {
        type: "create-user",
        user: expectedUser,
      };

      const newUser = createUserReducer(user, action);

      expect(newUser).toEqual(expectedUser); */
    });
  });
});
