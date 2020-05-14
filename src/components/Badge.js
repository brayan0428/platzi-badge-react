import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
export default class Badge extends React.Component {
  render() {
    const {name,lastName,jobTitle,twitter} = this.props
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
            {name} <br />
            {lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
    <h3>{jobTitle}</h3>
    <div>{twitter}</div>
        </div>
        <div className="Badge__footer">#Conferencia</div>
      </div>
    );
  }
}
