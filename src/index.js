import React from "react";
import ReactDOM from "react-dom";
import MasterForm from "./MasterForm";

import "./styles.css";

function App() {
  return <MasterForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
