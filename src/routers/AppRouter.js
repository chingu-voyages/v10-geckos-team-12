import React from "react";
import "../Style/App.css";
import Header from "../Components/Header";
import SplitItAppDashBoardPage from "../Components/SplitItAppDashBoardPage";
import PageNotFound from "../Components/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import AppReducer from "../Reducer/AppReducer";
import uuid from "uuid";

const store = createStore(AppReducer);

const addNewTrip = ({
  tripName = "Trip to Anonymous Land",
  travellers = []
} = {}) => ({
  type: "ADD_NEW_TRIP",
  trip: {
    tripId: uuid(),
    tripName,
    travellers
  }
});

const removeTrip = ({ tripId = {} }) => ({
  type: "REMOVE_TRIP", 
  tripId
});

store.subscribe(() => {
  console.log(store.getState());
});

const LondonTrip = store.dispatch(
  addNewTrip({ tripName: "London", travellers: ["Mike", "Dustin"] })
);

const ZurichTrip = store.dispatch(
  addNewTrip({ tripName: "Zurich", travellers: ["Mike", "Eleven"] })
);

console.log(ZurichTrip)

store.dispatch(removeTrip({tripId: ZurichTrip.trip.tripId}));

store.dispatch(removeTrip({tripId: LondonTrip.trip.tripId}));



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
