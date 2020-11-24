import axios from "axios";

export function login(data) {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/login", {
        email: data.email,
        password: data.password,
        logintype: data.logintype,
        devicetype: data.devicetype,
      })
      .then(
        (response) => {
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("id", response.data.id);

          dispatch({ type: "LOGIN", data: response.data });
        },
        (error) => {
          dispatch({ type: "LOGIN", data: error.response.data });
        }
      );
  };
}

export function register(data) {

  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/signup", {
        email:data.email,
      })
      .then(
        (response) => {
          dispatch({ type: "REGISTER", data: response.data });
        },
        (error) => {
          dispatch({ type: "REGISTER", data: error.response.data });
        }
      );
  };
}

export function verifyregister(data) {

  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/verification", {
        email:data.email,
        otp:data.otp,
        password:data.password
      })
      .then(
        (response) => {
          dispatch({ type: "REGISTER", data: response.data });
        },
        (error) => {
          dispatch({ type: "REGISTER", data: error.data });
        }
      );
  };
}

export function forget(data) {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/forgetpassword", {
        email: data.email,
      })
      .then(
        (response) => {
          dispatch({ type: "FORGOT_PASSWORD", data: response.data });
        },
        (error) => {
          dispatch({ type: "FORGOT_PASSWORD", data: error.response.data });
        }
      );
  };
}

export function verification(data) {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/verification", {
        email: data.email,
        otp: data.otp,
      })
      .then(
        (response) => {
          dispatch({ type: "FORGOT_PASSWORD", data: response.data });
        },
        (error) => {
          dispatch({ type: "FORGOT_PASSWORD", data: error.response.data });
        }
      );
  };
}
export function newpwd(data) {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users/resetPassword", {
        email: data.email,
        otp: data.otp,
      })
      .then(
        (response) => {
          dispatch({ type: "FORGOT_PASSWORD", data: response.data });
        },
        (error) => {
          dispatch({ type: "FORGOT_PASSWORD", data: error.response.data });
        }
      );
  };
}
