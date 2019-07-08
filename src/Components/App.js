import React from "react";
import "../Style/App.css";
import Header from "./Header";
import AddNewTrip from "./AddNewTrip";

function App() {
  return (
    <div className="App">
      <div className="split-it-App">
        <Header />
        <AddNewTrip />
      </div>
    </div>
  );
}

export default App;
