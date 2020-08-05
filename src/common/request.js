import axios from 'axios';
import { message } from 'antd';

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
      const { data } = response;
      if (!data.success) {
        message.error(data.message);
      }
      return data;
    })
    .catch(function (error) {
      console.log("error", error);
      message.error(error);
    }); 

}

export default request;