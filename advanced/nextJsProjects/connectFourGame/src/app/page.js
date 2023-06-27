import PageStyles from "../styles/Page.module.css";
import NavBar from "./components/client/NavBar/index";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <h1 className={PageStyles[`title`]}>Hello, next.js</h1>
      <div></div>
      <div></div>
      <NavBar />
    </React.Fragment>
  );
}
