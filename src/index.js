import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
//import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

//ReactDOM.render(<Badge name="Brayan" lastName="Llanos" jobTitle="Frontend Developer" twitter="@brayan0428" />, document.getElementById("root"));
ReactDOM.render(<Badges />, document.getElementById("root"));
