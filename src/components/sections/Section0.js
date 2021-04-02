import React from "react";

import { connect } from "react-redux";
import { setScrollElement } from "../../actions";

import BackgroundVideo from "../../images/Video-Background1.m4v";

function Section0({ setScrollElement }) {
  return (
    <div className="section section0">
      <div className="video-container">
        <video muted autoPlay loop>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="text-container">
        <h1>DevOps as a service</h1>
        <p>So you can work better, faster, and more efficiently</p>
        <div className="btn btn-learn-more btn-round" onClick={() => setScrollElement("section1")}>
          Learn more
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setScrollElement
};

export default connect(null, mapDispatchToProps)(Section0);
