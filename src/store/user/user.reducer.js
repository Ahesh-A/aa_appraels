import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.GOOGLE_SIGNIN_START:
    case USER_ACTION_TYPES.SIGN_UP_START:CHECK_USER_SESSION_START
    case USER_ACTION_TYPES.EMAIL_SIGNIN_START:
    case USER_ACTION_TYPES.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };

    case (USER_ACTION_TYPES.SIGN_IN_FAILED, USER_ACTION_TYPES.SIGN_UP_FAILED):
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
