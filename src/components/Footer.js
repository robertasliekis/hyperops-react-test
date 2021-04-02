import React from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";

import { connect } from "react-redux";
import { setScrollElement } from "../actions";

function Footer({ setScrollElement }) {
  const history = useHistory();

  const scrollToSection = (element) => {
    setScrollElement(element);
    if ($("." + element).offset() === undefined) {
      history.push("/");
    }
  };

  const scrollToLinks = [
    [
      ["section1", "Advantages"],
      ["section3", "Back-end"],
      ["section4", "Values"],
      ["section5", "Components"]
    ],
    [
      ["section6", "Migration plan"],
      ["section-clients", "Our clients"],
      ["section8", "Packages"],
      ["section4b", "Demo version"]
    ]
  ];

  return (
    <div className="footer section">
      <h6 className="title">HyperOps</h6>
      <div className="row">
        <div className="column">
          <p>
            HyperOps offers know-how IT solutions and DevOps services with exclusive 24/7/365 coverage. For more than 15 years company is
            serving the most demanding financial, telco, media, and e-commerce enterprises keeping a strong track record and one of the
            fastest response times within the market.
          </p>
        </div>
        {scrollToLinks.map((column, columnIndex) => (
          <div className="column" key={columnIndex}>
            {column.map((link, linkIndex) => (
              <div className="link" key={linkIndex} onClick={() => scrollToSection(link[0])}>
                {link[1]}
              </div>
            ))}
          </div>
        ))}
        <div className="column column-numbers">
          <div className="link">T. +370 678 03330</div>
          <div className="link">E. devops@hyperops.net</div>
        </div>
        <div className="column">
          <a className="link" href="https://www.facebook.com/HyperOps">
            Facebook
          </a>
          <a className="link" href="https://www.linkedin.com/company/metasite-hyperops/">
            Linkedin
          </a>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="copyright">
        All rights reserved <span>@HyperOps</span> - 2020
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setScrollElement
};

export default connect(null, mapDispatchToProps)(Footer);
