import axios from "axios";
import { BASE_URL } from "./api.js";

export const getAllData = async (endPoint) => {
  let res = await axios(BASE_URL + endPoint);
  let data = res.data;
  return data;
  
};

export const postData = async (endPoint, obj) => {
  let res = await axios.post(BASE_URL + endPoint, obj);
  let data = res.data;
  return data;
};

export const patchById = async (endPoint, id, obj) => {
  let res = await axios.patch(BASE_URL + endPoint + id, obj);
  let data = res.data;
  return data;
};

export const getDataById = async (endPoint, id) => {
  let res = await axios(BASE_URL + endPoint + id);
  let data = res.data;
  return data;
};
