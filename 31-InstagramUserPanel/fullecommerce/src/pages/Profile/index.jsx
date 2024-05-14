import React from 'react';
import './style.css'; 

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
        </div>
        <div className="profile-info">
          <h2 className="profile-username">Username</h2>
          <p className="profile-bio">Bio</p>
          <div className="profile-stats">
            <p><strong>100</strong> Gönderi</p>
            <p><strong>500</strong> Takipçi</p>
            <p><strong>250</strong> Takip</p>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        <div className="post">Post 1</div>
        <div className="post">Post 2</div>
        <div className="post">Post 3</div>
      </div>
    </div>
  );
}

export default Profile;
