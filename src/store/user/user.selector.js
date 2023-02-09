import { createSelector } from "reselect";

const selectUserReducer = (state) => {
  
  return state.user;
  
};

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.currentUser;
  }
);

//export const selectCurrentUser = (state)=>state.user.currentUser;
