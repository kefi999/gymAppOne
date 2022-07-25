import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewUserProvider } from "./contexts/NewUserContext";

ReactDOM.render(
  <React.StrictMode>
    <NewUserProvider>
      <App />
    </NewUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
