import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import "../Admin/admin.css";
import { sortAz, sortZa, sortLPrice, sortHPrice } from './sort';

const initialState = {
  products: [],
  searchTerm: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.searchValue };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(product => product.id !== action.productId) };
    default:
      return state;
  }
};

const Admin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products`);
        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [state.searchTerm]);

  const handleSearchChange = (e) => {
    dispatch({ type: 'SET_SEARCH', searchValue: e.target.value });
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      dispatch({ type: 'DELETE_PRODUCT', productId });
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product!');
    }
  };

  const sortProducts = () => {
    const sortedData = sortAz(state.products); 
    dispatch({ type: 'SET_PRODUCTS', payload: sortedData });
  };

  const sortProductsz = () => {
    const sortedData = sortZa(state.products); 
    dispatch({ type: 'SET_PRODUCTS', payload: sortedData });
  };

  const sortLPricez = () => {
    const sortedData = sortLPrice(state.products); 
    dispatch({ type: 'SET_PRODUCTS', payload: sortedData });
  };

  const sortHPricez = () => {
    const sortedData = sortHPrice(state.products); 
    dispatch({ type: 'SET_PRODUCTS', payload: sortedData });
  };

  return (
    <div className="admin-container">
      <div className="searchBox">
        <div>
          <input
            type="text"
            placeholder='Search...'
            value={state.searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className='buttons'>
          <button onClick={sortProducts}>A-Z</button> 
          <button onClick={sortProductsz}>Z-A</button>
          <button onClick={sortLPricez} >Low-High</button>
          <button onClick={sortHPricez}>High-Low</button>
          <button>LowRait-HighRait</button>
          <button>HighRait-LowRait</button>
          <button>LowCount-HighCount</button>
          <button>HighCount-LowCount</button>
        </div>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rate</th>
            <th>Count</th>
            <th>Delete</th>
            <th>Edit</th>

          </tr>
        </thead>
        <tbody>
          {state.products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><img className='shekil' src={product.image} alt="" /></td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
              <td><button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button></td>
              <td><button className="edit-button" >Edit</button></td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
