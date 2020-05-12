import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
export default class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Brayan <br />
            Llanos
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Fronted Developer</h3>
          <div>@brayan0428</div>
        </div>
        <div className="Badge__footer">#Conferencia</div>
      </div>
    );
  }
}
