import React from "react";
import ReactDOM from "react-dom";

import "../stylesheet/media.scss";
import "../stylesheet/index.scss";


function PersoneScils() {
  return (
    <div className="skills container">
      <div className="person col-lg-4">
        <div className="image"></div>
        <p className="name">JANE SMITH</p>
        <p className="ocupation">DESIGNER</p>
        <div className="social-networks">
          <span className="material-icons">star</span>
          <span className="material-icons">add_location</span>
          <span className="material-icons">photo</span>
        </div>
      </div>
      <div className="person-skills col-md-7 col-sm-12">
        <h1>MY SKILLS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua. Ut enim ad minim veniam.</p>
        <div className='skills-list'>
          <div>
            <p className="col-lg-4 col-md-5">PHOTOSHOP</p>
            <div className="meter col-md-6">
              <span Style="width: 10%"></span>
            </div>
            <p>10%</p>
          </div>
          <div>
            <p className="col-lg-4 col-md-5">ILUSTRATOR</p>
            <div className="meter col-md-6">
              <span Style="width: 62%"></span>
            </div>
            <p>62%</p>
          </div>
          <div>
            <p className="col-lg-4 col-md-5">SKETCH</p>
            <div className="meter col-md-6">
              <span Style="width: 75%"></span>
            </div>
            <p>75%</p>
          </div>
          <div>
            <p className="col-lg-4 col-md-5">AFTER EFFECTS</p>
            <div className="meter col-md-6">
              <span Style="width: 98%"></span>
            </div>
            <p>98%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersoneScils;
