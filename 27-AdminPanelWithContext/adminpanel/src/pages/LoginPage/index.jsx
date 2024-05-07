import React, { useState } from 'react';
import '../LoginPage/style.css';
import axios from 'axios';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', name: '', surname: '', balance: '', email: '', password: '', date: new Date().toISOString(), gender: '' });

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const getCurrentDate = () => {
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    };

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users', loginData);
            if (response.data === 'success') {
                window.location.href = '/users'; 
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to login. Please try again!');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/users', registerData);
            alert('Success!');
           
            await axios.post('http://localhost:3000/users', { email: registerData.email, password: registerData.password });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to register. Please try again!');
        }
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Login </span><span>Register</span></h6>
                            <input type="checkbox" className="checkbox" id="reg-log" name="reg-log" checked={isLogin} onChange={handleToggle} />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className={`card-3d-wrapper ${!isLogin ? 'flipped' : ''}`}>
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Login</h4>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={loginData.email} onChange={handleLoginInputChange} className="form-style" placeholder="Email" />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="password" value={loginData.password} onChange={handleLoginInputChange} className="form-style" placeholder="Password" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button onClick={handleLoginSubmit} className="btn mt-4">Login</button>
                                                <p className="mb-0 mt-4 text-center"><a href="" className="link">Forgot your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-3 pb-3">Register</h4>
                                                <div className="form-group">
                                                    <input type="text" name="username" value={registerData.username} onChange={handleRegisterInputChange} className="form-style" placeholder="Username" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="text" name="name" value={registerData.name} onChange={handleRegisterInputChange} className="form-style" placeholder="Name" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="text" name="surname" value={registerData.surname} onChange={handleRegisterInputChange} className="form-style" placeholder="Surname" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="number" name="balance" value={registerData.balance} onChange={handleRegisterInputChange} className="form-style" placeholder="Balance" />
                                                    <i className="input-icon uil uil-dollar-sign"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="email" name="email" value={registerData.email} onChange={handleRegisterInputChange} className="form-style" placeholder="Email" />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="password" value={registerData.password} onChange={handleRegisterInputChange} className="form-style" placeholder="Password" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="date" name="date" value={registerData.date} onChange={handleRegisterInputChange} className="form-style" />
                                                    <i className="input-icon uil uil-calendar-alt"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <select name="gender" value={registerData.gender} onChange={handleRegisterInputChange} className="form-style">
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    <i className="input-icon uil uil-venus-mars"></i>
                                                </div>
                                                <button onClick={handleRegisterSubmit} className="btn mt-4">Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
