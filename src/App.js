import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Login} /> */}
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
