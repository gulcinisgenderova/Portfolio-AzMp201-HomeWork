import React, { useReducer } from 'react';
import axios from 'axios';
import "../Post/style.css"

const initialState = {
  username: '',
  name: '',
  surname: '',
  balance: '',
  email: '',
  password: '',
  date: '',
  gender: '' 

 
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

const Postpages = () => {
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
      await axios.post('http://localhost:3000/users', state);
      alert('User created successfully!');
      dispatch({ type: 'RESET_FORM' });
    } catch (error) {
      alert('Failed to create user!');
    }
  };

  return (
    <div className="new-product-form">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={state.username} onChange={handleChange} required /> 
        <label>Name:</label>
        <input type="text" name="name" value={state.name} onChange={handleChange} required />
        <label>Surname:</label>
        <input type="text" name="surname" value={state.surname} onChange={handleChange} required />
        <label>Balance:</label>
        <input type="number" name="balance" value={state.balance} onChange={handleChange} required />
        <label>Email:</label>
        <input type="text" name="email" value={state.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="text" name="password" value={state.password} onChange={handleChange} required />
        <label>Date:</label>
        <input type="date" name="date" value={state.date} onChange={handleChange} required />
        <label>Gender:</label>
        <select className='darks' name="gender" value={state.gender} onChange={handleChange} required>
          <option className='darks'  value="">Select Gender</option>
          <option className='darks' value="male">Male</option>
          <option className='darks' value="female">Female</option>
          <option className='darks' value="other">Other</option>
        </select>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Postpages;
