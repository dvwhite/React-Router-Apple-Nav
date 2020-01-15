import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <NavWrapper />
      </div>
    </Router>
  );
}

export default App;
