import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import addNewTrip from "./actions/addNewTrip";
import deleteTrip from "./actions/deleteTrip";
import store from './Store/ConfigureStore'
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';
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

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
