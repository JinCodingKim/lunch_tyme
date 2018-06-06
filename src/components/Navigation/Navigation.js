import React from "react";
import { withRouter } from "react-router-dom";
import backIcon from "../../img/ic_webBack@2x.png";
import refreshIcon from "../../img/ic_webRefresh@2x.png";
import forwardIcon from "../../img/ic_webForward@2x.png";
import "./Navigation.css";

const Navigation = ({ history }) => {
  return (
    <nav className="navi">
      <h1>Lunch Tyme</h1>
      <div>
        <img onClick={history.goBack} src={backIcon} alt="back" />
        <img
          onClick={() => window.location.reload()}
          src={refreshIcon}
          alt="refresh"
        />
        <img onClick={history.goForward} src={forwardIcon} alt="forward" />
      </div>
    </nav>
  );
};
export default withRouter(Navigation);
