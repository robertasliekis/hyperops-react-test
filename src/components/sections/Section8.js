import React from "react";

import SectionTitle from "./SectionTitle";

function Section8() {
  const tableDesktop = [
    ["FEATURES", ["BASIC", "STANDART", "PROFESSIONAL", "ENTERPRISE"]],
    ["Load balancing"],
    ["Rolling update strategy"],
    ["Change management"],
    ["Green-blue deployment"],
    ["Seperate environments"],
    ["Database backup"],
    ["Monitoring"],
    ["Auto-scaling"],
    ["Kibana/Greylog"],
    ["Grafana dashboard"],
    ["Docker/kubernetes"],
    ["Project migration", ["Optional", "Optional", "Optional", "Optional"]]
  ];

  const columns = [0, 1, 2, 3];

  const tablesMobile = [
    ["BASIC", [["Database backup"], ["Docker/kubernetes"], ["Project migration", "Optional"]]],
    [
      "STANDART",
      [
        ["Load balancing"],
        ["Rolling update strategy"],
        ["Change management"],
        ["Green-blue deployment"],
        ["Seperate environments"],
        ["Project migration", "Optional"]
      ]
    ],
    [
      "PROFESSIONAL",
      [
        ["Load balancing"],
        ["Rolling update strategy"],
        ["Change management"],
        ["Green-blue deployment"],
        ["Seperate environments"],
        ["Docker/kubernetes"],
        ["Project migration", "Optional"]
      ]
    ],
    [
      "ENTERPRISE",
      [
        ["Load balancing"],
        ["Rolling update strategy"],
        ["Change management"],
        ["Green-blue deployment"],
        ["Seperate environments"],
        ["Database backup"],
        ["Monitoring"],
        ["Auto-scaling"],
        ["Kibana/Greylog"],
        ["Grafana dashboard"],
        ["Docker/kubernetes"],
        ["Project migration", "Optional"]
      ]
    ]
  ];

  return (
    <div className="section section8">
      <SectionTitle center={false} sectionIndex={8} />
      <div className="table-desktop">
        {tableDesktop.map((listItem, index) => (
          <div className={`row row${index + 1}`} key={index}>
            <div className="row-name">{listItem[0]}</div>
            <div className="column-names">
              {columns.map((column) => (
                <div className="column" key={column}>
                  {listItem[1] ? listItem[1][column] : ""}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="table-mobile">
        {tablesMobile.map((table, index) => (
          <div className="table" key={index}>
            <div className="table-name">{table[0]}</div>
            {table[1].map((row, index) => (
              <div className="row" key={index}>
                <div className="text">{row[0]}</div>
                {row[1] ? <div className="text-grey">Optional</div> : <div className="icon"></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section8;
