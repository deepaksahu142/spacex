import React, { Component } from "react";
import ApiService from "../../api/ApiService";
import "./FilterComponent.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userListsAction from "../../redux/actions/userLists.action";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class FilterComponent extends Component {
  state = {
    launch_year: [
      {
        id: 2006,
        year: 2006,
      },
      {
        id: 2007,
        year: 2007,
      },
      {
        id: 2008,
        year: 2008,
      },
      {
        id: 2009,
        year: 2009,
      },
      {
        id: 2010,
        year: 2010,
      },{
        id: 2011,
        year: 2011,
      },{
        id: 2012,
        year: 2012,
      },{
        id: 2013,
        year: 2013,
      },{
        id: 2014,
        year: 2014,
      },{
        id: 2015,
        year: 2015,
      },{
        id: 2016,
        year: 2016,
      },{
        id: 2017,
        year: 2017,
      },{
        id: 2018,
        year: 2018,
      },
      {
        id: 2019,
        year: 2019,
      },
      {
        id: 2020,
        year: 2020,
      },
    ],
    launch_success : [
      {
        id:true,
        value:true
      },
      {id:false,
      value:false}
    ],
    land_success : [
      {
        id:true,
        value:true
      },
      {
        id:false,
      value:false
      }
    ],
    
    filterDdata : [],
    clicked: false

  };
  handleCLick = (field,value) => {
    let newData;
    if(field === "year") {
     // this.props.history.push(`/?&launch_year=${value}`)

     newData = {
        launch_year:value,
        filtered:true
      }  
      alert(JSON.stringify(newData));
    }

    if(field === "launch") { 
      newData = {
        launch_success:value,
        filtered:true
      } 
      alert(JSON.stringify(newData));
    }

    if(field === "land") { 
      newData = {
        land_success:value,
        filtered:true
      } 
      alert(JSON.stringify(newData));
    }
    
    this.setState({
      ...this.state,
      filterDdata : [...this.state.filterDdata, newData]
    })

    var datas;
      setTimeout(() => {
        alert(JSON.stringify(this.state.filterDdata));
        
        
        if(this.state.filterDdata[0].hasOwnProperty("launch_year") && !this.state.filterDdata[0].hasOwnProperty("launch_success") ) {
          datas = `${Object.keys(this.state.filterDdata[0])[0]}=${this.state.filterDdata[0].launch_year}`
        }
        if( this.state.filterDdata.length > 1 &&  this.state.filterDdata[1].hasOwnProperty("launch_success")) {
          if(this.state.filterDdata[0].hasOwnProperty("launch_year") && this.state.filterDdata[1].hasOwnProperty("launch_success")) {
             datas = `${Object.keys(this.state.filterDdata[1])[0]}=${this.state.filterDdata[1].launch_success}&${Object.keys(this.state.filterDdata[0])[0]}=${this.state.filterDdata[0].launch_year}`
          }
        }
        

        if( this.state.filterDdata.length > 2 &&  this.state.filterDdata[1].hasOwnProperty("launch_success") &&  this.state.filterDdata[2].hasOwnProperty("land_success")) {
          if(this.state.filterDdata[0].hasOwnProperty("launch_year") && this.state.filterDdata[1].hasOwnProperty("launch_success") && this.state.filterDdata[1].hasOwnProperty("land_success")) {
             datas = `${Object.keys(this.state.filterDdata[2])[0]}=${this.state.filterDdata[2].land_success}&${Object.keys(this.state.filterDdata[1])[0]}=${this.state.filterDdata[1].launch_success}&${Object.keys(this.state.filterDdata[0])[0]}=${this.state.filterDdata[0].launch_year}`
          }
        }
        
        
        alert(datas);
          
          this.props.filtedData(datas)
        
      }, 2000);
    
    
  };
  render() {
    return (
      <div className="filterComponent">
        <h2>Filters </h2>

        <div className="listBox">
          <h4>Launch Year </h4>

          <ul className="d-flex flex-wrap filterlist">
            {this.state.launch_year.map((item) => (
              <li key={item.id}>
                <button 
                                className='btn btn-success' 

                
                onClick={() => this.handleCLick("year",item.id)}>
                  {item.year}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="listBox">
          <h4>Succesful Launch </h4>
          <ul className="d-flex flex-wrap filterlist ">
            
          {this.state.launch_success.map((item) => (
              <li key={`${item.id}`}>
                <button className="btn btn-success" onClick={() => this.handleCLick("launch" ,  item.id)}>
                  {`${item.value}`}
                </button>
              </li>
            ))}            
          </ul>
        </div>

        <div className="listBox">
          <h4>Succesful Landing </h4>
          <ul className="d-flex flex-wrap filterlist">
          {this.state.land_success.map((item) => (
              <li key={`${item.id}`}>
                <button className="btn btn-success" onClick={() => this.handleCLick("land" ,  item.id)}>
                  {`${item.value}`}
                </button>
              </li>
            ))}            

          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filtedData: (datas) => dispatch(userListsAction.modifyResearchCall(datas)),
  };
};


export default  compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(FilterComponent);

