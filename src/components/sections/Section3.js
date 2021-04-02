import React from "react";
import SectionTitle from "./SectionTitle";

function Section3() {
  const list = [
    "Blue-green deployment",
    "Full-scope of needed environments",
    "Handy resource accounting via performance graphs and logs",
    "99.99% uptime",
    "Effortlessly track, trace and change management<",
    "Zero downtime on application deployments and updates",
    "Prompt and easy roll-back to any previous version",
    "24x7x365 support with a dedicated project manager"
  ];

  return (
    <div className="section section3">
      <SectionTitle center={false} sectionIndex={3} />
      <div className="list">
        {list.map((listItem, index) => (
          <div className="list-item" key={index}>
            <div className="list-item-logo"></div>
            <div className="list-item-text">
              <p>{listItem}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
