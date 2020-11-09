import {
  MODIFY_USER_DATA,
  MODIFY_USER_DATA_SUCCESS,
  MODIFY_USER_DATA_ERROR,
  FETCH_USER_LIST_DATA,
  FETCH_USER_LIST_DATA_SUCCESS,
  FETCH_USER_LIST_DATA_ERROR,
} from "../actionTypes";

const istate = {
  fetchingUserList: false,
  fetchedUserList: false,
  modifyingData: false,
  modifiedData: false,
  allData: [],
  error:""
};

export default function userListsReducer(state = istate, action) {
  switch (action.type) {
    case FETCH_USER_LIST_DATA: {
      return {
        ...state,
        fetchingUserList: true,
        fetchedUserList: false,
      };
    }
    case FETCH_USER_LIST_DATA_SUCCESS: {
      return {
        ...state,
        //columns: Object.keys(action.payload.columns[0]),
        fetchingUserList: false,
        fetchedUserList: true,
        allData: action.payload,
      };
    }
    case FETCH_USER_LIST_DATA_ERROR: {
      return {
        ...state,
        fetchedUserList: false,
        error: action.payload,
      };
    }

    case MODIFY_USER_DATA: {
      return {
        ...state,
        fetchingUserList: true,
        fetchedUserList: false,
      };
    }

    case MODIFY_USER_DATA_SUCCESS: {
      return {
        ...state,
        fetchingUserList: false,
        fetchedUserList: true,
        allData: action.payload,
      };
    }

    case MODIFY_USER_DATA_ERROR: {
      return {
        ...state,
        modifiedData: false,
        modifyUserError: action.payload,
      };
    }
    default:
      return state;
  }
}
