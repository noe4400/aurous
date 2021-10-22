import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import UserDetails from "./components/UserDetails/UserDetails";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/userDetails/:userId" component={UserDetails} />
    </div>
  );
}

export default App;
