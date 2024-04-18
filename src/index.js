import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {composeWithDevTools} from "redux-devtools-extension"
// import {crea} from "react-redux"
import { store } from "./app/store";
import { Provider } from "react-redux";
// import reducer from "./components/book/bookSlice"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
