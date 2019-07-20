import React from "react";
import "../Style/App.css";
import Header from "../Components/Header";
import SplitItAppDashBoardPage from "../Components/SplitItAppDashBoardPage";
import PageNotFound from "../Components/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <div className="split-it-App">
        <Header />
        <Switch>
          <Route path="/" component={SplitItAppDashBoardPage} exact={true} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
