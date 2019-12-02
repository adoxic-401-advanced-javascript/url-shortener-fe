import { signup, login, verifySession } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const sessionSignup = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return signup(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionLogin = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return verifySession()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SESSION_ERROR,
        payload: err
      });
    });
};
