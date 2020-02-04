import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import AddContact from "./components/AddContact/AddContact";
import List from "./components/List/List";
import EditContact from "./components/EditContact/EditContact";
import ShowContact from "./components/ShowContact/ShowContact";
import MainComponent from "./components/MainComponent/MainComponent"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/list" component={List} />
          <Route exact path="/edit" component={EditContact} />
          <Route exact path="/show" component={ShowContact} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;