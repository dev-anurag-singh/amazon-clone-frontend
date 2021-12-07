import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v1/products`,
  // baseURL: `http://192.168.51.239:8000/api/v1/products`,
});
