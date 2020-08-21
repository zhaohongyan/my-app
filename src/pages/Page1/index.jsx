import React from 'react'
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Space, Button, Spin } from "antd";
import { Link } from 'react-router-dom'

import { nameSpace } from "./reducer";
import Filter from './Filter';
import CustomTable from '../../components/Table';
import request from "../../common/request";
import { GET_LIST } from "../../common/api";

function Page1({ route }) {
  const dispatch = useDispatch();

  const store = useSelector((state) => state.Page1Reducers);
  const { searchParams, list = [], column = {}, total, loading } = store;

  const getColumns = () => {
    const columns = Object.keys(column).map((key) => {
      return {
        title: column[key],
        dataIndex: key,
        key: key,
      };
    });
    return columns;
  }
  console.log("page1 store", store);

  const pagination = {
    current: searchParams.pageNo,
    pageSize: searchParams.pageSize,
    total: total
  };

  const handleTableChange = (pagination) => {
    console.log("pagination", pagination);
    const { current, pageSize } = pagination;
    getList({ pageNo: current, pageSize });
  }

  const getList = (params) => {
    request(GET_LIST, "POST", Object.assign(searchParams, params)).then(
      (res) => {
        const { data, success } = res;
        if (success && data) {
          dispatch({
            type: `${nameSpace}/setList`,
            payload: {
              list: data.list,
              column: data.column,
              total: data.total,
            },
          });
        }
      }
    );
  };

  return (
    <div>
      <Spin spinning={loading}>
        <div style={{ marginBottom: 20, fontSize: 24 }}>
          <SmileTwoTone style={{ marginRight: 10 }} />
          <HeartTwoTone style={{ marginRight: 10 }} twoToneColor="#eb2f96" />
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        </div>

        <Space style={{ marginBottom: 16 }}>
          <Link to="/page1/add">
            <Button>新增</Button>
          </Link>
          <Link to="/page1/edit/1">
            <Button>编辑</Button>
          </Link>
        </Space>

        <Filter />

        <CustomTable
          rowKey="id"
          columns={getColumns()}
          dataSource={list}
          onChange={handleTableChange}
          pagination={pagination}
        />
      </Spin>
    </div>
  );
}

export default Page1
