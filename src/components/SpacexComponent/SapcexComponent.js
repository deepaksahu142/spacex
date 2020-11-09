import React, { Component } from "react";
import "./SpacexComponent.css";
const SapcexComponent = ({ item }) => {
  return (
    
     
        <div className="col-xs-12 spacex">
          <div className="imageBox">
          <img src={item.links.mission_patch_small} alt="" />
          </div>
          <div className="infoBox">
          <h6>
            {item.mission_name} {item.flight_number ? `#${item.flight_number}` : null}
          </h6>
          <ul>
            <li>
              <strong>Mission Ids:</strong>
              <div>
                {item.mission_id.map((mId) => (
                  <span key={mId}>{mId} </span>
                ))}
              </div>
            </li>
            <li> <strong>Launch Year:</strong> {item.launch_year} </li>
            <li> <strong>Successful Launch:</strong> {`${item.launch_success}`} </li>
            <li> <strong>Successful Landing:</strong> {item.rocket.first_stage.cores[0].land_success ? `${item.rocket.first_stage.cores[0].land_success}`: null} </li>
          </ul>
          </div>
          </div>
     
  );
};
export default SapcexComponent;
