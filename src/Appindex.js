import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login1 from './Login1';
import App from './App';

function App1() {
  return (
    <Router>
      <Switch>
        <Route path="/App" component={App} />
      </Switch>
    </Router>
  );
}

export default App1;
