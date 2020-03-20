import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import OurServices from "./components/Pages/OurServices";
import NotFound from "./components/Pages/NotFound";
import ContactUs from "./components/Pages/ContactUs";
import Navbar from "./components/Layout/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Our-Services" component={OurServices} />
          <Route exact path="/Contact" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
