import { createSelector } from "reselect";

const selectUserReducer = (state) => {
  console.log("selectuser is fired");
  return state.user;
};

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => {
    console.log("selectCurrentUser is fired");
    return userSlice.currentUser;
  }
);

//export const selectCurrentUser = (state)=>state.user.currentUser;
