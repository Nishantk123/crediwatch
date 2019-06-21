import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MatchChart from "./Component/MatchChart";
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <MatchChart />
      </div>
    </Provider>
  );
}

export default App;
