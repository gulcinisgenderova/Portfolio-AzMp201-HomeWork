import React, { useEffect, useReducer } from 'react'
import "../userPanel/style.css"
import axios from 'axios';
import { Link } from "react-router-dom";
import { sortAzName,sortZaName } from '../../sort';
const initialStates = {
    users: [],
    searchTerm: ''
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
            case 'SET_SEARCH':
                return { ...state, searchTerm: action.searchValue };
        case 'DELETE_USER':
            return { ...state, users: state.users.filter(user => user.id !== action.userId) };

            case 'SET_ADMIN':
                return { ...state, users: state.users.filter(user => user.id !== action.userId) };


        default:
            return state;
    }
};

const UserPanel = () => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/users`);
            let filteredUsers = response.data;
    
            if (state.searchTerm) {
                filteredUsers = response.data.filter(user =>
                    user.username.toLowerCase().includes(state.searchTerm.toLowerCase())

              );
            }
    
            dispatch({ type: 'SET_USERS', payload: filteredUsers });
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [state.searchTerm]);
    
      const handleSearchChange = (e) => {
        dispatch({ type: 'SET_SEARCH', searchValue: e.target.value });
      };

      const adminSort= async (userId)=>{
        try {
            await axios.delete(`http://localhost:3000/users/${userId}`);
            dispatch({ type: 'DELETE_USER', userId });
            alert('User deleted successfully!');
          } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user!');
          } 
      }

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      dispatch({ type: 'DELETE_USER', userId });
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user!');
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = state.users.find(user => user.id === userId);
  
    const editedUser = prompt('Edit the user:', JSON.stringify(userToEdit));
  
    if (editedUser) {
      try {
        const updatedUser = JSON.parse(editedUser);
        axios.put(`http://localhost:3000/users/${userId}`, updatedProduct);
        const updatedUsers = state.users.map(user => {
          if (user.id === userId) {
            return updatedUser;
          }
          return user;
        });
        dispatch({ type: 'SET_USERS', payload: updatedUsers });
        alert('User updated successfully!');
      } catch (error) {
        alert('Failed to update user!');
      }
    }
  };

  const usernamess = () => {
    const sortedData = sortAzName(state.users); 
    dispatch({ type: 'SET_USERS', payload: sortedData });
  };

  const usernames = () => {
    const sortedData = sortZaName(state.users); 
    dispatch({ type: 'SET_USERS', payload: sortedData });
  };


    return (
        <div className="admin-container">

        <div className="searchBox">
            <input type="text" placeholder="Search..." value={state.searchTerm} onChange={handleSearchChange} />
            <div className="buttons">
                <button className="admin-button">Admin</button>
                <button className="sort-button" onClick={usernamess}>A-Z</button>
                <button className="sort-button" onClick={usernames}>Z-A</button>
            </div>
        </div>
    
        <table className="product-table">
            <thead>
                <tr>
                    <th>User Id:</th>
                    <th>Name:</th>
                    <th>Surname:</th>
                    <th>Username:</th>
                    <th>Age:</th>
                    <th>Email:</th>
                    <th>Password:</th>
                    <th>Gender:</th>
                    <th>Bio:</th>
                    <th>Profile Photo:</th>
                    <th>Delete:</th>
                    <th>Edit:</th>
                    <th>Detail:</th>

                </tr>
            </thead>
            <tbody>
                {state.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.username}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.gender}</td>
                        <td>{user.bio}</td>
                        <td><img className="shekil" src={user.profilePhoto} alt="" /></td>
                        <td><button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button></td>
                        <td><button className="edit-button" onClick={() => handleEdit(user.id)}>Edit</button></td>
                        <td><button className="detail-button" >Detail</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )
}

export default UserPanel
