import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from './action';

const initialState = {
  userData: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, isLoading: true }
    case LOGIN_FAILED:
      return { ...state, isLoading: false }
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false,  userData: payload }
    default:
      return state
  }
};

export default reducer;