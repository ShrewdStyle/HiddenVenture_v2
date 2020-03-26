import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import OurServices from "./components/Pages/OurServices";
import NotFound from "./components/Pages/NotFound";
import ContactUs from "./components/Pages/ContactUs";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import ServicesForm from "./components/Pages/ServicesForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/our-services" component={OurServices} />
          <Route exact path="/our-services/venture" component={ServicesForm} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
