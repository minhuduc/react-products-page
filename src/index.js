import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Products from "./pages/Products";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Switch>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
