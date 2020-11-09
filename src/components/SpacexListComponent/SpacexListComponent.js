import React, { Component } from "react";
import "./SpacexListComponent.css";
import UserListsAction from "../../redux/actions/userLists.action";

import SpacexComponent from "../SpacexComponent/SapcexComponent";

import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
class SpacexListComponent extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.props.getSpacexlistData();

  }
  render() {
    return (
      <div className="spacexListComponent">
        <div className="row">
        {this.props.fetchedUserList && this.props.allData.map((item, index) => (
            <SpacexComponent  item={item} key={index} />
        ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { fetchingUserList, fetchedUserList, allData } = state.userListsReducer;
  console.log(fetchingUserList, fetchedUserList, allData);
  return {
    fetchingUserList,
    fetchedUserList,
    allData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpacexlistData: () => dispatch(UserListsAction.getSpacexAllData()),
  };
};



export default  compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SpacexListComponent);