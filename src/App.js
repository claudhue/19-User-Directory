import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Nav from "./components/Nav"
import Search from "./components/Search"


function App() {
  return (
    <div>
      <Nav/>
      <Search/>
      <Directory/>
    </div>
  );
}

export default App;