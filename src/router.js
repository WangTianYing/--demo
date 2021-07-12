import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect, } from "react-router-dom";
// import {BrowserRouter as Router, Route, Switch, Redirect,} from "react-router-dom";
import SplitBundle from "./components/SplitBundle";
import PrivateRoute from "./components/PrivateRoute";
import Home from "bundle-loader?lazy&name=home!./pages/Home/index";



const createComponent = (component) => () => {
  let AsyncComponent = (
    <SplitBundle load={component}>
      {
        (Async) => Async ? <Async /> : ''
      }
    </SplitBundle>
  );
  return AsyncComponent
};
export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/' exact render={() => (
              <Redirect to='/home' />
            )} />  
            <Route exact path='/home' component={createComponent(Home)} />
           
            {/* <PrivateRoute path="/validation/:baseInfoId" component={createComponent(Validation)}/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
