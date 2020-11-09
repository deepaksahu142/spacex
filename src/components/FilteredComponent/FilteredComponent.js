import React, { Component , useEffect } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SpacexListComponent from "../SpacexListComponent/SpacexListComponent";
import {Link, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import UserListsAction from "../../redux/actions/userLists.action";
 
const FilteredComponent = () => {
    const params = useParams();
    const dispatch = useDispatch();
    console.log(params,"filtd");
    useEffect( () => {
      console.log("testsdfsdfdsf")
      dispatch(UserListsAction.modifyResearchCall(params))
    },[params])
    return (
      <div className="container">
        <h1><Link to="/">SpaceX Launch Programs</Link>  </h1>
        <div>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <FilterComponent />
            </div>
            <div className="col-md-9 col-xs-12">
              <SpacexListComponent />
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default FilteredComponent;
