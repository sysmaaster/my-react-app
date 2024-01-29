import React from "react";
import {iconsComponent} from "../common/icons/icoComponent";
import WalletContainer from "./wallet/WallerContainer";

const right_section = () => {
  return (
    <div>
    <div className="top">
      <i className="bx bx-bell"/>
      <div className="profile">
        <div className="left">
          <img src={iconsComponent("profile")} alt={"profile"}/>
          <div className="user">
            <h5>Enot Efonadiy</h5>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Basic Plan</a>
          </div>
        </div>
        <i className="bx bxs-chevron-right"/>
      </div>
    </div>
      
      < WalletContainer />
      
      
      
      {/*
    <div className="separator" id="first">
      <h4>Statistics</h4>
    </div>
      <div className="stats">
      <div className="item">
        <div className="top">
          <p>Courses</p>
          <p>Completed</p>
        </div>
        <div className="bottom">
          <div className="line"/>
          <h3>02</h3>
        </div>
      </div>
      <div className="item">
        <div className="top">
          <p>Total Points</p>
          <p>Gained</p>
        </div>
        <div className="bottom">
          <div className="line"/>
          <h3>250</h3>
        </div>
      </div>
      <div className="item">
        <div className="top">
          <p>Courses</p>
          <p>In Progress</p>
        </div>
        <div className="bottom">
          <div className="line"/>
          <h3>03</h3>
        </div>
      </div>
      <div className="item">
        <div className="top">
          <p>Tasks</p>
          <p>Finished</p>
        </div>
        <div className="bottom">
          <div className="line"/>
          <h3>250</h3>
        </div>
      </div>
    </div>
    <div className="separator">
      <h4>Weekly Work</h4>
    </div>
    <div className="weekly">
      <div className="title">
        <div className="line"/>
        <h5>Tasks This Week</h5>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="{50}"
        aria-valuemin="{0}"
        aria-valuemax="{100}"
      />
    </div>*/}
  </div>
  )
};
export default right_section