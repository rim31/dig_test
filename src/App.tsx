// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Participants from './components/Table/Participants';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/participants" component={Participants} />
      </Switch>
    </Router>
  );
}

export default App;
