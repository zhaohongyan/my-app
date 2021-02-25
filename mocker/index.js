const list = require('./admin/list')
const detail = require('./admin/detail')

module.exports = {
  ...list,
  ...detail,
};