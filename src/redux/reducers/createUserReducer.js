import actionTypes from "../actions/actionTypes/actionTypes";

/* const createUserReducer = (user = {}, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.createUser:
      newUser = { ...action.user };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
}; */

const createUserReducer = (users = [], action = {}) => {
  let newUser;
  switch (action.type) {
    /* case actionTypes.createUser:
      newUser = { ...action.user };
      break; */
    case actionTypes.createUser:
      newUser = action.user ? [...users, { ...action.user }] : [...users];
      break;
    default:
      newUser = [...users];
  }
  return newUser;
};

export default createUserReducer;
