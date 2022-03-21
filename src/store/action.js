export const LOGIN = 'LOGIN/LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED/LOGIN_FAILED';

const loginStart = () => ({
  type: LOGIN
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload
});

const loginFailed = () => ({
  type: LOGIN_FAILED
});

export const setLogin = (payload) => dispatch => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({username: payload?.username, password: payload?.password})
  }

  dispatch(loginStart());
  fetch('https://tasklogin.herokuapp.com/api/login', request)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('access_token', data?.access_token)
      dispatch(loginSuccess(data));
    })
    .catch((err) => {
      dispatch(loginFailed())
    });
  return { type: LOGIN, payload }
};