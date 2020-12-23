import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/checkout">
            <Header/>
          <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route> */}

          <Route path="/">
            {/*Bottom one is the default Route */}
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
