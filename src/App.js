import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Login} /> */}
      <Route path="/" component={SearchBar} />
    </div>
  );
}

export default App;
