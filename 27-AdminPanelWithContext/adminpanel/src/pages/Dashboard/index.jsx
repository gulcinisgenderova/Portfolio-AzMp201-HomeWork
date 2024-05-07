import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Dashboard/style.css';

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [adminCount, setAdminCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get('http://localhost:3000/users');
                const users = userResponse.data;
                setUserData(users);
                const productResponse = await axios.get('http://localhost:3000/products');
                setProductData(productResponse.data);
                const adminCount = users.filter(user => user.isAdmin).length;
                const userCount = users.length - adminCount;
                setAdminCount(adminCount);
                setUserCount(userCount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Dashboard</h2>
            <div className="dashboard-info">
                <div className="info-box">
                    <h3>User Count</h3>
                    <div className="info-value">{userCount}</div>
                </div>
                <div className="info-box">
                    <h3>Product Count</h3>
                    <div className="info-value">{productData.length}</div>
                </div>
                <div className="info-box">
                    <h3>Admin Count</h3>
                    <div className="info-value">{adminCount}</div>
                </div>
            </div>
            <div className="dashboard-chart">
                <h3>Graphs</h3>
                <div className="chart-container">
                    <div className="bar-chart"></div>
                    <div className="pie-chart"></div>
                    <div className="line-chart"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
