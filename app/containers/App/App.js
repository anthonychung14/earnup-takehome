/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import ChatPage from "containers/ChatPage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";
import "./style.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - Earnup Takehome"
        defaultTitle="Earnup Takehome"
      >
        <meta name="description" content="Earnup" />
      </Helmet>

      <Header />
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
