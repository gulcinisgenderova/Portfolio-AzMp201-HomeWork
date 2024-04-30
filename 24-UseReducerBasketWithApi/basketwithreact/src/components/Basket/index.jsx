import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import "./basketstyle.css";

const Basket = ({ basket, setBasket }) => {
  const deleteItem = (id) => {

    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log('Item deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };
  

  return (
    <div className='basketPage'>
      {basket && basket.map((item) => (
        <Card style={{ width: '18rem' }} key={item.id}>
          <Card.Body className='cardBasket'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text> Price: {item.price} $</Card.Text>
            <Button variant="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Basket;
