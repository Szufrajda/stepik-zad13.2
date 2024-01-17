import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:operation" element={<Calculator />} />
        </Routes>
      </Router>
  );
};

export default App;
