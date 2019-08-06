import React from 'react';
import './App.scss';
import List from './components/list/List'
import New from './components/new/New'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={List} />
          <Route exact path="/add" component={New} />
      </Router>
    </div>
  );
}

export default App;
