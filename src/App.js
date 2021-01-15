import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
