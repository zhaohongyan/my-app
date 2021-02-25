import React from 'react';
import { Table, Pagination } from "antd";


function CustomTable({ columns, dataSource, pagination, ...others }) {
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>上一页</a>;
    }
    if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        {...others}
      />
      <Pagination itemRender={itemRender} {...pagination} />
    </div>
  );
}
export default CustomTable;
