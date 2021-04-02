import React from "react";

import SectionTitle from "./SectionTitle";

function Section6() {
  const list = [
    [
      "Infrastructure analysis",
      "Our team will first examine your current workflow and capacities so we can maximize your transition into DevOps as a Service."
    ],
    ["Consultation", "Together, we’ll come up with a comprehensive migration plan for your infrastructure, people, and processes."],
    [
      "Migration plan defined",
      "Together we will define migration plan to give you a clear view and understanding what and when will be done and how this will impact your operations."
    ],
    [
      "Migration",
      "Our experts will make sure it’s a smooth transition, implementing CI/CD, load balancing, autoscaling, DR, backup, and monitoring solutions for you."
    ],
    [
      "Going live",
      "Once we deploy the data and code, you’re on board. Now, your team can focus and enjoy the benefits of DevOps as a Service, continually improving development, deployment, and maintenance."
    ]
  ];
  return (
    <div className="section section6">
      <SectionTitle center={true} sectionIndex={6} />
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

export default Section6;
