import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename='/index.html'>
    <App />
  </Router>


)
