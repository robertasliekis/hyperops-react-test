import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

import { connect } from "react-redux";
import { setScrollElement } from "../actions";

function Header({ setScrollElement }) {
  const history = useHistory();
  const [burgerClicked, setBurgerClicked] = useState(false);

  const scrollToSection = (element) => {
    setBurgerClicked(false);
    setScrollElement(element);
    if ($("." + element).offset() === undefined) {
      history.push("/");
    }
  };

  const headerButtons = [
    ["logo-image", "", "section0"],
    ["btn", "How it works", "section1"],
    ["btn", "The product", "section2b"],
    ["btn", "Benefits", "section4"],
    ["btn", "Packages", "section8"],
    ["btn", "Blog", "blog"]
  ];

  const createMenuButtons = () => {
    return headerButtons.map((button, index) => {
      return button[2] === "blog" ? (
        <Link className="btn" key={index} to={`/blog`} onClick={() => scrollToSection(button[2])}>
          {button[1]}
        </Link>
      ) : (
        <div className={`${button[0]}`} key={index} onClick={() => scrollToSection(button[2])}>
          {button[1]}
        </div>
      );
    });
  };

  const createConctactButtons = () => {
    return (
      <div className="container container-contact">
        <div className="btn btn-round btn-hollow btn-demo" onClick={() => scrollToSection("section7")}>
          Demo
        </div>
        <div className="btn btn-round  btn-contact" onClick={() => scrollToSection("footer")}>
          Contact Us
        </div>
      </div>
    );
  };

  let burgerClassName = burgerClicked ? "burger-menu-clicked" : null;

  return (
    <div className="header">
      <div className="navbar">
        <div className="container-left container">{createMenuButtons()}</div>
        {createConctactButtons()}
        <div className={"burger-menu " + burgerClassName} onClick={() => setBurgerClicked(!burgerClicked)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="sidebar" style={{ transform: burgerClicked ? "translateX(0%)" : "translateX(-100%)" }}>
        {createMenuButtons()}
        {createConctactButtons()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleCategory: state.setOpenArticle.articleCategory,
    articleIndex: state.setOpenArticle.articleIndex
  };
};

const mapDispatchToProps = {
  setScrollElement
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
