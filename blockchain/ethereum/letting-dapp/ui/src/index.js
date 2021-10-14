import React from "react";
import ReactDOM from "react-dom";
import Store from "./redux/Store.js";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
