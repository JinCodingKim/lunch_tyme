import React from "react";
import { connect } from "react-redux";
import { switcher } from "../../ducks/restaurant";
import backIcon from "../../img/ic_webBack@2x.png";
import refreshIcon from "../../img/ic_webRefresh@2x.png";
import forwardIcon from "../../img/ic_webForward@2x.png";
import "./Navigation.css";

const Navigation = ({ show, name, switcher }) => {
  console.log(name);
  return (
    <nav className="navi">
      <h1>Lunch Tyme</h1>
      <div>
        {show ? (
          <img onClick={switcher} src={backIcon} alt="back" name="back" />
        ) : (
          <div className="img-placeholder" />
        )}
        <img
          id="refresh"
          onClick={() => window.location.reload()}
          src={refreshIcon}
          alt="refresh"
        />
        {name && !show ? (
          <img
            onClick={switcher}
            src={forwardIcon}
            alt="forward"
            name="forward"
          />
        ) : (
          <div className="img-placeholder" />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    show: state.show,
    name: state.nomHolder.name
  };
};

export default connect(
  mapStateToProps,
  { switcher }
)(Navigation);
