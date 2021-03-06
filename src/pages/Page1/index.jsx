import React, { useEffect, useCallback } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Space, Button, Spin } from "antd";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import request from "common/request";
import { GET_LIST, GET_LIST2, GET_LIST3 } from "common/api";

import { nameSpace } from "./reducer";
import Filter from './Filter';
import CustomTable from '../../components/Table';


function Page1({ route }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const store = useSelector((state) => state.Page1Reducers);
  const { searchParams, list = [], column = {}, total, loading } = store;

  const handleEdit = (id) => {
    history.push(`/page1/edit/${id}`)
  }

  const getColumns = () => {
    let columns = [];
    if (Object.keys(column).length > 0) {
      columns = Object.keys(column).map((key) => {
        if (key === 'id') {
          return {
            title: column[key],
            dataIndex: key,
            key: key,
            render: (txt, record) => {
              return <Link to={`/page1/detail/${record.id}`}>{txt}</Link>
            }
          };
        }
        return {
          title: column[key],
          dataIndex: key,
          key: key,
        };
      });

      columns.push({
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space>
            <Button type="link" onClick={() => handleEdit(record.id)}>编辑</Button>
          </Space>
        )
      })
    }

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

  const getList = useCallback((params) => {
    request(GET_LIST2, "POST", Object.assign(searchParams, params)).then(
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
    request(GET_LIST3, "POST");
  }, [dispatch, searchParams]);


  useEffect(() => {
    getList();
  }, [getList])

  return (
    <div>
      <Spin spinning={loading}>
        <Space style={{ marginBottom: 16 }}>
          <Link to="/page1/add">
            <Button type="primary">新增</Button>
          </Link>
          <Link to="/page2">
            <Button>to Page2</Button>
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
