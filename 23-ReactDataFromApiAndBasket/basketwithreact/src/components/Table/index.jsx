import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import Basket from '../Basket';
import '../Table/style.css';
import AddData from './AddData';

const Tablex = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToBasket = (item) => {
    setBasket(prevBasket => [...prevBasket, item]);
  };

  const sortAz = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  };

  const sortZa = () => {
    const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setData(sortedData);
  };

  const sortAscending = () => {
    const sortedData = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
    setData(sortedData);
  };

  const sortDescending = () => {
    const sortedData = [...data].sort((a, b) => b.unitPrice - a.unitPrice);
    setData(sortedData);
  };

  return (
    <>
      <h1>Products</h1>
      <AddData setData={setData} data={data} />
      <Basket basket={basket} />
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
          {data && data.map((elem) => {
            return (
              <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.unitPrice}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      const updatedData = data.filter((el) => el.id !== elem.id);
                      setData(updatedData);
                      axios.delete(`https://northwind.vercel.app/api/products/${elem.id}`);
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      const newName = prompt(`${elem.name} deyisdir`, elem.name);
                      const updatedData = data.map((el) => (el.id === elem.id ? { ...el, name: newName } : el));
                      setData(updatedData);
                      axios.patch(`https://northwind.vercel.app/api/products/${elem.id}`, { name: newName });
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
    </>
  );
};

export default Tablex;
