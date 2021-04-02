import React from "react";

import SectionTitle from "./SectionTitle";

function Section5() {
  const list = [
    ["Kubernetes", "Managed Kubernetes and container orchestration."],
    ["Databases", "Choose the most suitable DB: SQL, NoSQL, etc."],
    ["GitLab", "GitLab for CI/CD pipeline, users and projects management."],
    ["Kibana / Graylog", "Easily manage and search your logs."],
    ["Grafana", "Grafana/Prometheus monitoring and dashboards."],
    ["Ansible", "Ansible for virtual instances' management."]
  ];

  return (
    <div className="section section5">
      <SectionTitle center={false} sectionIndex={5} />
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

export default Section5;
