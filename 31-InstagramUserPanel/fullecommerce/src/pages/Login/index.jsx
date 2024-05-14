import React, { useState } from 'react';
import './style.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserName:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="https://logomaster.ai/hs-fs/hubfs/pink-logo-dribbble.jpg?width=1700&height=1148&name=pink-logo-dribbble.jpg"
          alt="Instagram"
          className="instagram-logo"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
        <div className="separator">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <button className="signup-btn">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
