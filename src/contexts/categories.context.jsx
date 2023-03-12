import { createContext, useEffect, useReducer } from "react";

import { getCategoriesAndDocs } from "../utils/firebase/firebse.utils";

import { createAction } from "../utils/reducer/reducer.util.ts";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      }
    default:
      throw new Error(`unhandled case of type ${type} `);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
	const {categoriesMap} = state;

  //const [categoriesMap, setCategoriesMap] = useState({});
  
  const setCategoriesMap = (categoryMap) => {
    dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryMap));
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

	const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
