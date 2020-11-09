import { combineReducers } from "redux";

import userListsReducer from "./reducers/userLists.reducer";
// import userCategoryReducer from "./reducers/selectCategory.reducer";
// import userLoginReducer from "./reducers/userLogin.reducer";

const rootReducer = combineReducers({
  userListsReducer,
  // userCategoryReducer,
  // userLoginReducer,
});

export default rootReducer;
