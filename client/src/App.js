import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profilepage from "./pages/Profilepage";
import Searchpage from "./pages/Searchpage";
import Login from "./pages/Login";
import Bloghome from "./pages/Bloghome";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Profilepage" component={Profilepage} />
          <Route exact path="/Searchpage" component={Searchpage} />
          <Route exact path="/Bloghome" component={Bloghome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
