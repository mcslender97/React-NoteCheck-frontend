import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';



import ShowTextDetails from './components/ShowNoteDetails'
import ShowAllNoteItems from './components/ShowAllNoteItems';

function App() {
  return (
    <div>
      <Router>
          {/* <Route exact path='/' component={Portal} /> */}
          <Route path='/all' component={ShowAllNoteItems} />
          {/* <Route path='/edit-note/:id' component={UpdateNoteItem} /> */}
        {/* <Route path='/:id' component={ShowNoteDetails} /> */}
      </Router>
        <div className="App">
          <header className="App-header">
          </header>
        </div>
    
    </div>

  );
}

export default App;
