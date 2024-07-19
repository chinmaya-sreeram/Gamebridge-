import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {SignUp} from './SignUp';
import Home from './Home';
import Publish from './Publish';

function App() {
  return (
    <div className="App">
       <Router>
          <div>
            <Link to={("/")}>Home </Link>
            <Link to={("/signup")}>SignUp </Link>
            <Link to={("/publish")}>Publish</Link>
          </div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/publish" element={<Publish/>} />
                </Routes>
        </Router>
    </div>
  );
}



export default App;

