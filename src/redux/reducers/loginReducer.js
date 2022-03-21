import actionTypes from "../actions/actionTypes/actionTypes";

const loginReducer = (user = { isLogged: false }, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.loadProfile:
      newUser = { ...action.user };
      break;
    case actionTypes.loginUser:
      newUser = { ...action.user, isLogged: true };
      break;
    case actionTypes.logoutUser:
      newUser = { isLogged: false };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
};

export default loginReducer;

/* const userReducer = (currentUser = {}, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.login:
      newUser = { ...action.login };
      break;
    case actionTypes.logout:
      newUser = {};
      break;
    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducer; */
