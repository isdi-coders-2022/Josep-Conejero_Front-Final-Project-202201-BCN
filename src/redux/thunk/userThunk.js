import axios from "axios";
import {
  createUserAction,
  /* loadProfileAction, */
  loginUserAction,
} from "../actions/actionsCreator/actionsCreator";
import toast from "react-hot-toast";

export const loginThunk = (user, navigate) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL_USER}/user/login`;
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  axios
    .post(url, user, config)
    .then((response) => {
      const { data } = response;
      const token = data.token;
      localStorage.setItem("token", token);
      dispatch(loginUserAction(user));
      navigate("/home");
    })
    .catch((error) => {
      /* debugger; */
      /*  dispatch(errorOnRegisterAction(error.response.data));
      toast.error(`${error.response.data.message}`, {*/
      toast.error(`USER OR PASSWORD ARE WRONG`, {
        duration: 2000,
        style: {
          position: "relative",
          height: 100,
          width: 150,
          border: "2px solid black",
          textAlign: "center",
          top: 280,
          color: "#fff",
          backgroundColor: "#d715c3",
        },
      });
    });
};

export const createUserThunk = (user, navigate) => async (dispatch) => {
  /* const data = new FormData(); */
  /* data.append("image", user.image);*/
  /* data.append("name", user.name);
  data.append("username", user.username);
  data.append("password", user.password); */
  /* const data = {
    name: user.name,
    username: user.username,
    password: user.password,
  }; */

  const data = JSON.stringify({
    name: user.name,
    username: user.username,
    password: user.password,
  });

  const url = `${process.env.REACT_APP_API_URL_USER}/user/register`;

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  /*  const config = { headers: { "content-type": "multipart/form-data" } };
   */
  axios
    .post(url, data, config)
    .then(() => {
      dispatch(createUserAction(data));
      navigate("/login");
    })
    .catch((error) => {
      /* debugger; */
      /*  dispatch(errorOnRegisterAction(error.response.data));
      toast.error(`${error.response.data.message}`, {*/
      toast.error(`USER EXISTS`, {
        duration: 2000,
        style: {
          position: "relative",
          height: 100,
          width: 150,
          border: "2px solid black",
          textAlign: "center",
          top: 280,
          color: "#fff",
          backgroundColor: "#d715c3",
        },
      });
    });
};

/* export const loadProfileThunk = (token) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL_USER}/user`;

  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  debugger;

  axios.get(url, config).then((response) => {
    dispatch(loadProfileAction(response.data.actualUser));
  });
}; */

/* import { axios } from "axios";
import jwtDecode from "jwt-decode";
import {
  errorOnLoginAction,
  errorOnRegisterAction,
  loginAction,
} from "../actions/actionsCreator/actionsCreator";

export const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/user/register`;

  await axios
    .post(url, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {})
    .catch((error) => {
      dispatch(errorOnRegisterAction(error.response.data));
    });
};

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/user/login`;

  await axios
    .post(url, userData)
    .then((response) => {
      localStorage.setItem("tokenKey", response.data.token);
      const userInfo = jwtDecode(response.data.token);
      dispatch(loginAction(userInfo));
    })
    .catch((error) => {
      dispatch(errorOnLoginAction(error.response.data));
    });
};
 */
