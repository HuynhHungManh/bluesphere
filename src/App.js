import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Saving from "./Saving";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className='App'>
      {/* Specifies components to handle specific routes */}
      <Nav/>
      <Header/>
      <Router>
        <div>
          {/* This line specifies that if the browser URL matches /,
          the ArticleListing component should be rendered in this place. */}
          <Route exact path='/' component={Home} />
          <Route exact path='/saving' component={Saving} />
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
