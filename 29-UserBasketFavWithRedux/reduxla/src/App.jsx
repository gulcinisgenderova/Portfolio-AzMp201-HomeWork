import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Basket from './components/Basket';
// import Favorite from './components/Favorite';

function App() {
  return (
    <Router>
      <div>
        <Navbarr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          {/* <Route path="/favorite" element={<Favorite />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
