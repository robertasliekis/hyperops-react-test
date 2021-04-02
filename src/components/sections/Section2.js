import React from "react";

import SectionTitle from "./SectionTitle";

function Section2() {
  const list = [
    [
      "Fully-supported platforms",
      "Our DevOps as a Service platform gives your team the tools to collaborate and be more agile than ever before. But, it is our custom solutions, dedicated project managers, and 24/7/365 support that makes us stand out and allows you to stay ahead."
    ],
    [
      "Cloud of your choise",
      "You can use your own private cloud or a public cloud of your choice. At HyperOps, we have ready to use servers, networks, Kubernetes clusters, backups, and HA solutions with 99.99% uptime SLA that are fully supported by our team of experts."
    ],
    [
      "Expert insight",
      "We go further by not only providing a top-tier DevOps as a Service platform but by designing bespoke solutions and supporting your team with expert insights so they can code, test and deploy more efficiently from day one and beyond."
    ]
  ];

  return (
    <div className="section section2b">
      <SectionTitle center={false} sectionIndex={2} />
      <div className="list">
        {list.map((listItem, index) => (
          <div className="list-item" key={index}>
            <div className={`list-item-logo list-item-logo${index + 1}`}>{index + 1}</div>
            <div className="list-item-text">
              <h6>{listItem[0]}</h6>
              <p>{listItem[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
