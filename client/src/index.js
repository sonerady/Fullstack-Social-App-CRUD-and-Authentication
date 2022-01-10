import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux İMPORTS
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import memoriesReducer from "./reducers/memoriesReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./bootstrap.min.css";

const reducer = combineReducers({
  memories: memoriesReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
