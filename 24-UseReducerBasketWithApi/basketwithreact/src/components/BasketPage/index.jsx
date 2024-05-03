// BasketPage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import Basket from '../Basket';

const BasketPage = ({ basket, setBasket }) => {
  const deleteAllItems = () => {
    setBasket({ type: 'DELETE_ALL' });
  };

  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="basket-page">
      <h2>Basket</h2>
      <Basket basket={basket} setBasket={setBasket} />
      <p>Total items: {basket.length}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>
      <Button variant="danger" size="lg" onClick={deleteAllItems}>
        Delete All
      </Button>
    </div>
  );
};

export default BasketPage;
