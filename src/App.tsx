import React from 'react';
import './App.css';
import ShoutOutList from './components/ShoutOutList';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <Header/>
        <ShoutOutList/>
    </div>
  );
}

export default App;
