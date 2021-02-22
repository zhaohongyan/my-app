const getList = require('./getList');
const list2 = require('./admin/list')
const detail = require('./admin/detail')

module.exports = {
  ...getList,
  ...list2,
  ...detail
};