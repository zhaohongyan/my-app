import React from 'react'
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import Filter from './Filter';
import CustomTable from '../../components/Table';

function Page1() {
  const store = useSelector((state) => state.Page1Reducers);
  const { list, column, total } = store;

  function getColumns() {
    const columns = Object.keys(column).map(key => {
      return {
        title: column[key],
        dataIndex: key,
        key: key,
      };
    })
    return columns;
  }
  console.log('page1 store', store);

  return (
    <div>
      <div style={{ marginBottom: 20, fontSize:24 }}>
        <SmileTwoTone style={{ marginRight: 10 }} />
        <HeartTwoTone
          style={{ marginRight: 10 }}
          twoToneColor="#eb2f96"
        />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>

      <Filter />
      
      <CustomTable
        rowKey="id" 
        columns={getColumns()} 
        total={total} 
        dataSource={list}
      />
    </div>
  );
  
}

export default Page1
