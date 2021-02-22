const API = require('../src/common/api')

// 接口地址
const getList = 'POST ' + API.GET_LIST;
const getList2 = 'POST ' + API.GET_LIST2;
const getList3 = 'POST ' + API.GET_LIST3;
const getDetail = 'GET ' + API.GET_DETAIL;

// 数据
const { listData } = require('./getList')
const { list2, list3 } = require('./admin/list')
const { detail1, detail2 } = require('./admin/detail')

module.exports = {
  [getList]: (req, res) => {
    return res.status(200).json(listData)
  },
  [getList2]: (req, res) => {
    return res.status(200).json(list2)
  },
  [getList3]: (req, res) => {
    return res.status(200).json(list3)
  },
  [getDetail]: (req, res) => {
    if (req.query.id === '1') {
      return res.status(200).json(detail2)
    } else {
      return res.status(200).json(detail1)
    }
  },
};