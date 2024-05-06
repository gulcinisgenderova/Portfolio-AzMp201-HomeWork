import React, { useReducer } from 'react';
import axios from 'axios';
import "../Post/style.css"

const initialState = {
  title: '',
  price: '',
  category: '',
  image: '',
  rating: {
    rate: '',
    count: ''
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Post = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("rating.")) {
      const ratingField = name.split(".")[1];
      dispatch({
        type: 'SET_FIELD',
        field: 'rating',
        value: { ...state.rating, [ratingField]: value }
      });
    } else {
      dispatch({ type: 'SET_FIELD', field: name, value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/products', state);
      alert('Product created successfully!');
      dispatch({ type: 'RESET_FORM' });
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product!');
    }
  };

  return (
    <div className="new-product-form">
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={state.title} onChange={handleChange} required />
        <label>Price:</label>
        <input type="number" name="price" value={state.price} onChange={handleChange} required />
        <label>Category:</label>
        <input type="text" name="category" value={state.category} onChange={handleChange} required />
        <label>Image URL:</label>
        <input type="text" name="image" value={state.image} onChange={handleChange} required />
        <label>Rate:</label>
        <input type="number" name="rating.rate" value={state.rating.rate} onChange={handleChange} required />
        <label>Count:</label>
        <input type="number" name="rating.count" value={state.rating.count} onChange={handleChange} required />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default Post;






