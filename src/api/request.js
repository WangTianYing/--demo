import axios from 'axios';
import qs from 'qs';
import {Toast} from 'antd-mobile';
import {base_url} from '../utils/config';

const CryptoJS = require('crypto-js/hmac-sha1');
const history=require('history').createHashHistory


axios.defaults.baseURL = base_url;

export  const request = (api, method = "GET", params = {}, config = {}) => {
  const data = (method === 'GET') ? 'params' : 'data';
  let dataStr = '';
  let parames = [];
  let d = params;
  for (let one in params) {
    parames.push(one)
  }
  parames.sort();
  for (let i = 0; i < parames.length; i++) {
    let isNull = !!d[parames[i]] ? d[parames[i]] : '';
    dataStr += parames[i] + '=' + isNull + '&';
    if (isNull == '') {
      d[parames[i]] = ''
    }
  }
  let token = localStorage.getItem('token') || '';
  let signature = CryptoJS(dataStr, token).toString().toUpperCase();
  let headers = {
    signature: signature,
    Authorization: token,
  };

  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }

  return new Promise((resolve, reject) => {
    axios({
      url: api,
      method,
      [data]: method === "GET" ? params : qs.stringify(params),
      headers,
    }).then((res) => {
      // console.log(res, 'res');
      if (res.headers.authorization) {
        localStorage.setItem('token', res.headers.authorization)
      }
      if (res.data.code == '0') {
        resolve(res.data)
      } else {
        Toast.info(res.data.message, 1);
        reject();
      }
    }).catch(error => {
      // console.log(error.response);
      if (error.response.data.code) {
        // localStorage.removeItem("token");
        // history.push('/login');
      }
      reject(error);
    });
  });
};
// module.exports = request;

