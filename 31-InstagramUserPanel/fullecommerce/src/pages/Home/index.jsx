import React, { useState } from 'react';
import './style.css';

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const users = ['User1', 'User2', 'User3']; 

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages([]); 
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!selectedUser) {
      console.log('No user selected.');
      return;
    }
  
    if (message.trim() === '') return;
  
    const newMessage = {
      sender: 'Me',
      content: message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="home-container">
      <div className="stories">
        <div className="story">Story 1</div>
        <div className="story">Story 2</div>
        <div className="story">Story 3</div>
      </div>
      <div className="feed">
        <div className="post">
          <img src="https://via.placeholder.com/150" alt="Post 1" />
        </div>
        <div className="post">
          <img src="https://via.placeholder.com/150" alt="Post 2" />
        </div>
        <div className="post">
          <img src="https://via.placeholder.com/150" alt="Post 3" />
        </div>
      </div>
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index} onClick={() => handleUserClick(user)}>
              {user}
            </li>
          ))}
        </ul>
      </div>
      <div className="message-box">
        <h2>Messages</h2>
        {selectedUser ? (
          <div className="conversation">
            <div className="conversation-header">{selectedUser}</div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={msg.sender === 'Me' ? 'sent' : 'received'}>
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="input-box">
              <input
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message..."
                disabled={!selectedUser} className='ares'
              />
            </div>
            <button className='butar' onClick={handleSend}>Send</button>
          </div>
        ) : (
          <div className="no-conversation">No user selected</div>
        )}
      </div>
    </div>
  );
}

export default Home;
