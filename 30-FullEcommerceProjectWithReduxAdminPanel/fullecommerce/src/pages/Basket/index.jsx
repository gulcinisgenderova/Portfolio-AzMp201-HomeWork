import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/basketSlices';
import "../Basket/style.css"

const Basket = () => {
  const dispatch = useDispatch();
  const { items, count } = useSelector((state) => state.basket);

  return (
    <div className="container">
      <h2 className="basket-header">My Basket</h2>
      <p>Number of items: {count}</p>
      <ul className="basket-list">
        {items.map((item) => (
          <li key={item.id} className="basket-item">
            <img className="basket-item-image" src={item.image} alt={item.title} />
            <div className="basket-item-info">
              <h3 className="basket-item-title">{item.title}</h3>
              <p className="basket-item-price">${item.price}</p>
              <p className="basket-item-count">Count: {item.count}</p> 
            </div>
            <button className="remove-button" onClick={() => dispatch(removeItem(item))}>
              Remove from Basket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;