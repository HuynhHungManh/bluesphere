import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// You'll add these two Article components in a moment
import ArticleListing from "./ArticleListing";
import ArticleView from "./ArticleView";
import Home from "./Home";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Nav/>
      {/* Specifies components to handle specific routes */}
      <Router>
        <div>
          {/* This line specifies that if the browser URL matches /,
          the ArticleListing component should be rendered in this place. */}
          <Route exact path='/' component={Home} />

        </div>
      </Router>
    </div>
  );
}

export default App;
