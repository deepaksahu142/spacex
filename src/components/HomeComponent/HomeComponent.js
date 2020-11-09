import React, { Component } from "react";
import { Link } from "react-router-dom";
import FilterComponent from "../FilterComponent/FilterComponent";
import SpacexListComponent from "../SpacexListComponent/SpacexListComponent";

class HomeComponent extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="container">
        <h1><Link to="/">SpaceX Launch Programs</Link>  </h1>
        <div>
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <FilterComponent />
            </div>
            <div className="col-md-8 col-xs-12 col-sm-8 spacexComponent">
              <SpacexListComponent />
            </div>
          </div> 
        </div>
      </div>
    );
  }

}

export default HomeComponent;
