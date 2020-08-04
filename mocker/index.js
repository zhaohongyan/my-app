const db = {
  errCode: 0,
  success: true,
  message: "请求成功",
  data: {
    column: {
      name: "姓名",
      age: "年龄",
      sex: "性别",
    },
    total: 1,
    list: [
      {
        id: 1,
        name: "Emma",
        age: 30,
        sex: "女",
      },
    ],
  },
};

const proxy = { 
  "POST /api/test": db
};

module.exports = proxy;
