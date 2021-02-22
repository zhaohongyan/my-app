import { GET_DETAIL } from '../../src/common/api'

const detail1 = {
  errCode: 0,
  success: true,
  message: "请求成功",
  data: {
    id: 1,
    name: "Emma",
    age: 30,
    sex: "女",
  },
}

const detail2 = {
  errCode: 0,
  success: true,
  message: "请求成功",
  data: {
    id: 1,
    name: "Amy",
    age: 30,
    sex: "女",
  },
}

const getDetail = 'GET ' + GET_DETAIL;

module.exports = {
  [getDetail]: (req, res) => {
    console.log(req.query);
    if (req.query.id === '1') {
      return res.status(200).json(detail2)
    } else {
      return res.status(200).json(detail1)
    }
  },
}