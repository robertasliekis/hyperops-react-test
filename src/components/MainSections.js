import React, { useEffect } from "react";
import $ from "jquery";

import { connect } from "react-redux";
import { setScrollElement } from "../actions";

import Section0 from "./sections/Section0";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section4Email from "./sections/Section4Email";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";

function MainSections({ scrollElement, scrollClickCount }) {
  useEffect(() => {
    if (scrollElement !== "") {
      const projectsOffset = $("." + scrollElement).offset().top - 90;
      $("html,body").animate({ scrollTop: projectsOffset }, "slow");
    }
  }, [scrollElement, scrollClickCount]);

  return (
    <div className="main-sections">
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section4Email />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    scrollElement: state.setScrollElement.scrollElement,
    scrollClickCount: state.setScrollElement.scrollClickCount
  };
};

const mapDispatchToProps = {
  setScrollElement
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSections);
