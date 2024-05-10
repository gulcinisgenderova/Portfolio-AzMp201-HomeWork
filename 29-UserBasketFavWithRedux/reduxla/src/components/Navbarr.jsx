import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarr;
