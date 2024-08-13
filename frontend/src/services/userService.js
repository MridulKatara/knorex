import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

export const exportUsers = async (userIds) => {
  const response = await axios.post(`${API_URL}/export`, { userIds });
  return response.data;
};
