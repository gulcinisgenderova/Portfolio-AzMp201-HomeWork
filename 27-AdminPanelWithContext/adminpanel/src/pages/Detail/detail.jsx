import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Detail/style.css"

const initialState = {
  product: null,
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        product: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

const Detail = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', error: error.message });
      }
    };

    fetchData();
  }, [id]);

  const { product, loading, error } = state;

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!product) {
    return <div className="not-found-message">Product not found</div>;
  }

  return (
    <article className='bodys'>
    <section class="card detail-container">
      <div class="text-content">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <div class="action-buttons">
          <button>Add to Basket</button>
          <button>Add to Favorites</button>
        </div>
      </div>
      <div class="visual">
        <img src={product.image} alt={product.title} />
      </div>
    </section>
  </article>
  
  );
};

export default Detail;
