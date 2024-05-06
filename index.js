// clicked button when first load
const specialButton = document.getElementById('startSB');

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
