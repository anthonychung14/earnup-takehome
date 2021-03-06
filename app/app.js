/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import "@babel/polyfill";

// Import all the third party stuff
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "utils/history";
import "sanitize.css/sanitize.css";

import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

// Import root app
import App from "containers/App";

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import "!file-loader?name=[name].[ext]!./images/favicon.png";
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import "styles/theme.scss";

import configureStore from "./configureStore";

// Import all initialization stuff
import { registerOpenSans } from "./init";

registerOpenSans();

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("app");

const rrfConfig = {
  userProfile: "users"
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,

    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
