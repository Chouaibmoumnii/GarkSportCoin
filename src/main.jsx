import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
