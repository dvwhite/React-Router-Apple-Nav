import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

function App() {
  return (
    <div className="App">
      <Route 
        path='/'
        component={NavWrapper} 
      />
      <Route 
        path='/mac' 
        component={SubNav} 
      />
      <Route 
        path='/ipad' 
        component={SubNav} 
      />
      <Route 
        path='/iphone' 
        component={SubNav} 
      />
      <Route 
        path='/watch' 
        component={SubNav} 
      />
      <Route 
        path='/tv' 
        component={SubNav} 
      />
      <Route 
        path='/music' 
        component={SubNav} 
      />
      <Route 
        path='/support' 
        component={SubNav} 
      />

    </div>
  );
}

export default App;
