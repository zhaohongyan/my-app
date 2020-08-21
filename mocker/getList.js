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
    "list|10": [
      {
        "id|+1": 1,
        name: "Emma",
        age: 30,
        sex: "女",
      },
    ],
  },
});

const dbErr = Mock.mock({
  errCode: 0,
  success: false,
  message: "请求失败",
  data: null
});


const Err401 = {
  status: "error",
  code: 403,
};

module.exports = {
  'POST /api/getList': (req, res) => {
    return res.status(200).json(db)
    // return res.status(200).json(dbErr);
    // return res.status(403).json(Err401);
  }
}