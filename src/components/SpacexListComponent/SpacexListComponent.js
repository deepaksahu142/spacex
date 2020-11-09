import React, { Component } from "react";
import "./SpacexListComponent.css";
import UserListsAction from "../../redux/actions/userLists.action";
import SpacexComponent from "../SpacexComponent/SapcexComponent";

import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

const queryString = require('query-string');
class SpacexListComponent extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    if(this.props.match.params.filterParam && this.props.match.params.filterParam !== undefined){
      const parsed = queryString.parse(this.props.match.params.filterParam);
      this.setState({parsed})
      this.props.filtedData(this.props.match.params.filterParam);
    }else{
      this.props.getSpacexlistData();
    }
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
    filtedData: (datas) => dispatch(UserListsAction.modifyResearchCall(datas)),
  };
};



export default  compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SpacexListComponent);