import ApiService from "../../api/ApiService";
class UserListsAction {
  getSpacexAllData() {
    return (dispatch) => {
      dispatch({ type: "FETCH_USER_LIST_DATA" });

      ApiService.fetchAllData()
        .then((response) => {
          dispatch({
            type: "FETCH_USER_LIST_DATA_SUCCESS",
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "FETCH_USER_LIST_DATA_ERROR",
            payload: error.response,
          });
        });
    };
  }

  

  modifyResearchCall(data) {
    console.log("data", data)
    
    return (dispatch) => {
      dispatch({ type: "MODIFY_USER_DATA" });
      ApiService.filterAllData(data)
        .then((response) => {
          dispatch({
            type: "MODIFY_USER_DATA_SUCCESS",
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "MODIFY_USER_DATA_ERROR",
            payload: error.response,
          });
        });
    };
  }
}
export default new UserListsAction();
