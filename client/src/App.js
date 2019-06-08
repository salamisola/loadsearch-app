import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import Profilepage from "./pages/Profilepage"; */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profilepage from "./pages/Profilepage";
import Searchpage from "./pages/Searchpage";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        {/*  <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profilepage" component={Profilepage} />
          <Route exact path="/searchpage" component={Searchpage} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
