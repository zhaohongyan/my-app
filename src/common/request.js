import axios from 'axios';
import { message } from 'antd';

// 暂时只用get,post
// 后面优化delete put option
function request (url, method, data) {
  if (method === 'get') {
    axios.get(url, {
      params: data
    }).then(function (response) {
      console.log("response", response);
      return response;
    }).catch(function (error) {
      console.log("error", error)
      message.error(error);
    }) 
  } else if (method === 'post') {
    axios.post(url, data).then(function(response) {
      return response;
    }).catch(function (error) {
      message.error(error);
    })
  }
}

export default request;