import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Login} />
    </div>
  );
}

export default App;
