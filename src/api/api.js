import axios from 'axios';
import router from '../routes'
let base = '/httpclient';
const querystring = require('querystring');

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
const postIt = async (url, params) => {
    return await axios.post(url, querystring.stringify(params))
}
export const requestLogin = async (params) => { 
    return await postIt(`${base}/login`, params)
};
export const searchComment = async(params) => {
    return await axios.post('/comment/_search?pretty',params)
}
export const getArticleList = params => { return axios.get(`${base}/article/getRecent`, { params: params }); };
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };