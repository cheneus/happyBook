import React from "react";
import Books from "./pages/Books/Books";
import Search from "./pages/Books/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"

const App = () =>
<Router>
  <div>
    <Nav />
    <Switch>
    <Route exact path='/' component={Books}/>
      <Route path='/books/:id' component={Books}/>
      {/* <Route path='/details' component={Detail}/> */}
      <Route path='/search' component={Search} />
      <Route component={NoMatch} />
      </Switch>
  </div>
</Router>
export default App;
