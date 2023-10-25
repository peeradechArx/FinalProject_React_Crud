import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Profile from "./profile";
//import PrivateRoute from './PrivateRoute';
//import Users from './Users'
//

ReactDOM.render(
  
  <BrowserRouter>
  <Profile/>
  <App/>
  </BrowserRouter>,
  
  document.getElementById('root')
);

reportWebVitals();