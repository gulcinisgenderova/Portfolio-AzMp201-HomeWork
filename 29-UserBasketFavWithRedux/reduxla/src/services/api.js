import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async () => {
  try {
    const response = await API.get('/products');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

