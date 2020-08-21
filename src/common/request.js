import axios from 'axios';
import { message } from 'antd';

const httpStatus = {
  401: (error) => {
    message.info("未登录");
  },
  403: () => {
    message.info("权限错误");
  },
  500: () => {
    message.info("服务器错误");
  },
  502: () => {
    message.info("服务器错误");
  },
  504: () => {
    message.info("服务器错误");
  },
};

function errorHandle(error) {
  if (error && error.response && httpStatus[error.response.status]) {
    httpStatus[error.response.status](error);
  }
}

function request (url, method, data) {
  let paramsData = {};
  if (method === 'GET') {
    paramsData = { params: data }
  } else {
    paramsData = { data }
  }

  return axios({
    method,
    url,
    ...paramsData,
  })
    .then(function (response) {
      const { data, status } = response;
      if (status === 200) {
        if (!data.success) {
          message.error(data.message);
        }
        return data;
      } else {
        console.log("not 200");
      }
    })
    .catch(function (error) {
      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //   // http.ClientRequest in node.js
      //   console.log(error.request);
      // } else {
      //   // Something happened in setting up the request that triggered an Error
      //   console.log("Error", error.message);
      // }
      console.log(error);
      errorHandle(error)
      return { success: false };
    });
}

export default request;