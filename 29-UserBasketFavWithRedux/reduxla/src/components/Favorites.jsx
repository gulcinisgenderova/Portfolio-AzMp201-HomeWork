import React from 'react';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favoriteItems = useSelector((state) => state.favorite.favorites);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>You haven't added any favorite items yet.</p>
      ) : (
        <ul>
          {favoriteItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
