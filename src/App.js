import React from 'react';
import {Joke} from './pages/Joke'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='*' element={<Joke></Joke>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
