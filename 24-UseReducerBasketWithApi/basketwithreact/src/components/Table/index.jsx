import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import Basket from '../Basket';
import '../Table/style.css';
import AddData from './AddData';

const initialState = {
  data: [],
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    case 'DELETE_FROM_BASKET':
      return { ...state, basket: state.basket.filter(item => item.id !== action.payload) };
    case 'UPDATE_DATA':
      return { ...state, data: state.data.map(item => item.id === action.payload.id ? action.payload.updatedItem : item) };
    default:
      return state;
  }
};

const Tablex = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_FROM_BASKET', payload: id });
    axios.delete(`https://fakestoreapi.com/products/${id}`);
  };

              const editItem = (id, newName) => {
    const updatedItem = { ...state.data.find(item => item.id === id), title: newName };
    dispatch({ type: 'UPDATE_DATA', payload: { id, updatedItem } });
    axios.patch(`https://fakestoreapi.com/products/${id}`, { title: newName });
  };

        const sortAz = () => {
    const sortedData = [...state.data].sort((a, b) => a.title.localeCompare(b.title));
    dispatch({ type: 'SET_DATA', payload: sortedData });
  };

  const sortZa = () => {
    const sortedData = [...state.data].sort((a, b) => b.title.localeCompare(a.title));
    dispatch({ type: 'SET_DATA', payload: sortedData });
  };

  const sortAscending = () => {
          const sortedData = [...state.data].sort((a, b) => a.price - b.price);
    dispatch({ type: 'SET_DATA', payload: sortedData });
  };

  const sortDescending = () => {
    const sortedData = [...state.data].sort((a, b) => b.price - a.price);
    dispatch({ type: 'SET_DATA', payload: sortedData });
  };

  return (
    <>
      <h1>Products</h1>
      <AddData />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name <Button variant="light" onClick={sortAz} className="sortBtns">A-Z</Button>
              <Button variant="light" onClick={sortZa}>Z-A</Button>
            </th>
            <th>Price <Button variant="light" onClick={sortAscending} className="sortBtns"> Low-High</Button>
              <Button variant="light" onClick={sortDescending}>High-Low</Button>
            </th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody>
          {state.data && state.data.map((elem) => {
            return (
              <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteItem(elem.id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      const newName = prompt(`${elem.title} deyisdir`, elem.title);
                      if (newName !== null) {
                        editItem(elem.id, newName);
                      }
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => addToBasket(elem)} 
                  >
                    Basket
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="basket-container">
        <h2>Basket</h2>
        <Basket basket={state.basket} setBasket={dispatch} /> 
        <Button variant="danger" size="lg" className='deleteAll'>Delete All</Button>
      </div>
    </>
  );
};

export default Tablex;
