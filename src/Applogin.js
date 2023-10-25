import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login1 from './login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login1" component={Login1} />
      </Switch>
    </Router>
  );
}

export default App;
