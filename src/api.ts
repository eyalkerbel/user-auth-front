import axios from 'axios';
import {User} from "./types";

const API_BASE_URL = 'http://localhost:8080'; // need to be in the .env but I put here for saving you to create .env file

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = async () => {
  const {data} = await apiClient.get('/users');
  return data;
};

export const deleteUser = async (userId: string) => {
  await apiClient.delete(`/users/${userId}`);
};

export const createUser = async (user: User) => {
  const {data} = await apiClient.post('/users', user);
  return data;
};
