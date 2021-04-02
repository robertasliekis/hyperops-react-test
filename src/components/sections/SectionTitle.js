import React from "react";

import sectionTitlesData from "../../data/SectionTitlesData";

function SectionTitle(props) {
  const title = sectionTitlesData[props.sectionIndex - 1];

  return (
    <div className={`section-title ${props.center ? "section-title-center" : "section-title-side"}`}>
      <div className="icon-numbering">
        <div className="line line1"></div>
        <div className="number">{`0${props.sectionIndex}`}</div>
        <div className="line line2"></div>
      </div>
      <h5 dangerouslySetInnerHTML={{ __html: title.heading }}></h5>
      {title.text !== "" ? <p dangerouslySetInnerHTML={{ __html: title.text }}></p> : ""}
    </div>
  );
}

export default SectionTitle;
