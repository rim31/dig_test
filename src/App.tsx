// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Participants from './components/Table/Participants';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dig_test/" component={Login} />
        <Route path="/dig_test/participants" component={Participants} />
        <Route path={'*'} ><NotFound /></Route>
      </Switch>
    </Router>
  );
}
function NotFound() {
  return (
    <h1>Page Not Found</h1>
  )
}
export default App;
