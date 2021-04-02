import React from "react";
import SectionTitle from "./SectionTitle";

const list = [
  [
    "Easy access",
    "Access our DevOps as a Service with just a few clicks via our dedicated web platform. We will outfit it with all the infrastructure and bespoke technical adjustments you need."
  ],
  ["Integrations", "Easily integrate the workflow and task management applications that your team prefers in our one-stop-shop."],
  [
    "CI/CD",
    "We’ve already pre-integrated the best CI/CD practices and processes so you can use one out of the box right away, or build it to fit your needs."
  ],
  [
    "Users",
    "Manage your team's access, permissions, and scope. Plus, every action your team performs is logged for clear oversight and full transparency."
  ],
  [
    "Environments",
    "Fully customize your development, staging UAT, and production environments to your needs. Whether they’re identical or individualized, you can access them all within a single sign-on."
  ],
  [
    "Infrastructure ",
    "Unlike public clouds where you have no real support or have to purchase it separately, at HyperOps, you have access to ready to use servers, networks, Kubernetes clusters, backups, and HA solutions with 99.99% uptime SLA and full support included."
  ]
];

function Section1() {
  return (
    <div className="section section1">
      <SectionTitle center={false} sectionIndex={1} />
      <div className="graph-image"></div>
      <div className="list">
        {list.map((listItem, index) => (
          <div className="list-item" key={index}>
            <div className={`list-item-logo list-item-logo${index + 1}`}></div>
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

export default Section1;
