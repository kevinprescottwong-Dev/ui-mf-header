import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
const App = () => (
  <>
    <header className="flex justify-between w-full bg-red-500 p-2">
      Header
      <div>Test</div>
    </header>
    <Header />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
