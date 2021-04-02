import React from "react";

import SectionTitle from "./SectionTitle";

function Section4() {
  const list1 = [
    ["Instant access to DevOps professionals", "from the start and on-call when you need us."],
    ["Expertise, technical documentation, and mentorship", "to help your in-house team continually develop and improve."],
    ["Fine-tuned workflow deployment", "to streamline your code transitions into intuitive, quickly-executed tasks."],
    ["New and improved processes", "extending your internal DevOps capacity while enabling our resources and practices."],
    ["Exciting infrastructure capabilities", "with full auto-scaling power and optimized resource utilization."],
    ["24x7x365 support", "provided by our DevOps team of experts."]
  ];

  const list2 = [
    "DaaS provides a fully built and 'ready to use' platform. Customers connect directly to projects/repositories. While in other platforms, customers have to build all infrastructure from separate components and after this integrate them. This is not only time consuming, but also requires wide competencies and qualifications.",
    "AI-based monitoring, usage predictions and recommendations on how to optimize resources' allocation.",
    "DaaS is fully managed and supported service."
  ];

  return (
    <div className="section section4">
      <SectionTitle center={true} sectionIndex={4} />
      <div className="list1">
        {list1.map((listItem, index) => (
          <div className="list-item" key={index}>
            <div className={`list-item-logo list-item-logo${index + 1}`}></div>
            <div className="list-item-text">
              <p>{listItem[0]}</p>
              <p>{listItem[1]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="horizontal-line"></div>
      <div className="info-container">
        <div className="text-left">
          <p className="font-large">
            Compared to other cloud-based DevOps solutions DaaS has the same features and equal functionalities, they are just implemented
            by different tools.
          </p>
          <div className="text-arrow">
            <div className="text">Main differences:</div>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="list2">
          {list2.map((listItem, index) => (
            <div className="list-item" key={index}>
              <div className="list-item-logo"></div>
              <div className="list-item-text">
                <p>{listItem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section4;
