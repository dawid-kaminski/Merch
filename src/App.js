import React from 'react';
import Header from './header/Header';
import Article from './article/Article';
import Design from './design/Design';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
          <Article />
        </Route>
        <Route exact path="/design">
          <Design/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
