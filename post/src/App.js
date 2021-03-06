import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
