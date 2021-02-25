const Mock = require("mockjs");
const API = require('../../src/common/api');

const getList = 'POST ' + API.GET_LIST;
const getList2 = 'POST ' + API.GET_LIST2;
const getList3 = 'POST ' + API.GET_LIST3;

const db = Mock.mock({
  errCode: 0,
  success: true,
  message: "请求成功",
  data: {
    column: {
      id: "序号",
      name: "姓名",
      age: "年龄",
      sex: "性别",
    },
    total: 22,
    "list|22": [
      {
        "id|+1": 1,
        name: "Amy",
        age: 30,
        sex: "女",
      },
    ],
  },
});

module.exports = {
  [getList]: (req, res) => {
    return res.status(200).json(db)
  },
  [getList2]: (req, res) => {
    return res.status(200).json(db)
  },
  [getList3]: (req, res) => {
    return res.status(200).json(db)
  },
}