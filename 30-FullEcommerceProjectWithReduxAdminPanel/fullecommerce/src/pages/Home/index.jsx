import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCard } from '../../redux/slices/cardSlice';
import { addItem } from '../../redux/slices/basketSlices';
import '../Home/style.css';

const Home = () => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  return (
    <div className="home-container">
      {card.map((item) => (
        <div key={item.id} className="card">
          <img className="card-image" src={item.image} alt={item.title} />
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">${item.price}</p>
            <button className="card-button" onClick={() => dispatch(addItem(item))}>
              Add to Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
