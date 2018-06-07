import React from "react";
import { withRouter, Link } from "react-router-dom";
import internetsIcon from "../../img/tab_internets@2x.png";
import lunchIcon from "../../img/tab_lunch@2x.png";
import "./SideNavigation.css";

const SideNavigation = ({ location }) => {
  const { pathname } = location;

  return (
    <nav className="side-nav">
      <div
        className="side-container"
        style={{
          backgroundColor: pathname === "/" ? "rgb(28,28,28)" : "rgb(42,42,42)"
        }}
      >
        <Link to="/" className="side-link">
          <img src={internetsIcon} alt="internets" />
          internets
        </Link>
      </div>
      <div
        className="side-container"
        style={{
          backgroundColor:
            pathname === "/list" ? "rgb(28,28,28)" : "rgb(42,42,42)"
        }}
      >
        <Link to="/list" className="side-link">
          <img src={lunchIcon} alt="lunch" />
          lunch
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(SideNavigation);
