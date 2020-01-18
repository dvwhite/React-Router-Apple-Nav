import React from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

function App() {
  return (
    <div className="App">
      <Route 
        path='/'
        render={props => <NavWrapper {...props} />} 
      />
      <Route 
        path='/mac' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/ipad' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/iphone' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/watch' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/tv' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/music' 
        render={props => <SubNav {...props} />} 
      />
      <Route 
        path='/support' 
        render={props => <SubNav {...props} />} 
      />
    </div>
  );
}

export default App;
