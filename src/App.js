import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Nav from "./components/Nav";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project/:id">
            <ProjectPage />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
