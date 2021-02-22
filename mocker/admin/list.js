const Mock = require("mockjs");

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
  'POST /api/getList2': (req, res) => {
    return res.status(200).json(db)
  },
  'POST /api/getList3': (req, res) => {
    return res.status(200).json(db)
  }
}