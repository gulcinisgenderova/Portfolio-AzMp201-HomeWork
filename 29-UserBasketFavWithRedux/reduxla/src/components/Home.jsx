import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../services/api';
import { addItem } from '../redux/slices/basketSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.card.products);
  const loading = useSelector((state) => state.card.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToBasket = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - {product.price}
              <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
