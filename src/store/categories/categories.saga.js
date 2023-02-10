import { takeLatest, all, call } from "redux-saga/effects";

import { fetchCategoriesSuccess, fetchCategoriesError } from "./category.action";

import { getCategoriesAndDocs } from "../../utils/firebase/firebse.utils";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
  
    try {
      const categoriesArray = await getCategoriesAndDocs("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesError(error));
    }
  };
  