import React from 'react';
import { Table } from "antd";


function CustomTable({ columns, dataSource, ...others }) {
  return (
    <div>
      <Table
        columns={columns}
        pagination={{ position: ["bottomRight"] }}
        dataSource={dataSource}
        {...others}
      />
    </div>
  );
}
export default CustomTable;
