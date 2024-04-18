import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components';
import { WithRoutes } from './WithRoutes';

import './app.css'

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <WithRoutes />
    </Router>
  );
};

export { App };
