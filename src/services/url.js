import { post, get } from './request';

const AUTH_URL = 'https://shielded-cove-74205.herokuapp.com/api/v1/short';

export const makeUrl = (oldUrl, userId) => post(`${AUTH_URL}/urls`, 
  { oldUrl, userId });

export const getUrls = () => get(`${AUTH_URL}/urls`);
export const getUrlsByUser = (userId) => get(`${AUTH_URL}/urls/${userId}`);
export const getOriginalUrl = (url) => get(`${AUTH_URL}/urls/${url}`);
