import React from "react";
import "../Style/App.css";
import Header from "../Components/Header";
import SplitItAppDashBoardPage from "../Components/SplitItAppDashBoardPage";
import PageNotFound from "../Components/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import AppReducer from "../reducer/AppReducer";
import addNewTrip from "../actions/addNewTrip";
import deleteTrip from '../actions/deleteTrip';
import store from '../Store/ConfigureStore';
import uuid from "uuid";

store.subscribe(() => {
  console.log(store.getState());
});

const LondonTrip = store.dispatch(
  addNewTrip({
    tripName: "London",
    travellers: [{ id: uuid(), name: "Mike" }, { id: uuid(), name: "Dustin" }]
  })
);

const ZurichTrip = store.dispatch(
  addNewTrip({
    tripName: "Zurich",
    travellers: [{ id: uuid(), name: "Mike" }, { id: uuid(), name: "Eleven" }]
  })
);

store.dispatch(deleteTrip({ tripId: ZurichTrip.trip.tripId }));

store.dispatch(deleteTrip({ tripId: LondonTrip.trip.tripId }));

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
