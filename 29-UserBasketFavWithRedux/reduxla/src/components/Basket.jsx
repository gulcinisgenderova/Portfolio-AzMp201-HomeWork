import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearBasket } from '../redux/slices/basketSlice';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  return (
    <div>
      <h2>Your Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basketItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => handleAddItem(item)}>+</button>
              <button onClick={() => handleRemoveItem(item)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearBasket}>Clear Basket</button>
    </div>
  );
};

export default Basket;
