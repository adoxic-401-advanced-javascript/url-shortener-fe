import { post, get } from './request';

const AUTH_URL = 'http://localhost:7891/api/v1/auth';

export const signup = (username, password) => post(`${AUTH_URL}/signup`, 
  { username, password });

export const login = (username, password) => post(`${AUTH_URL}/signin`,
  { username, password });

export const verifySession = () => get(`${AUTH_URL}/verify`);
