import React from 'react'
import { Form, Input, Select, Button } from 'antd';
import { useStore, useDispatch, useSelector } from "react-redux";

import request from '../../../common/request';

function Filter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Page1Reducers);
  const { searchParams } = state;

  const onFinish = (values) => {
    console.log("Success:", values);
    const params = {
      ...searchParams,
      ...values
    };
    // getList(params);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onValuesChange = (changedValues, allValues) => {
    console.log("onValuesChange", changedValues, allValues);
    dispatch({
      type: "page1/changeSearch",
      payload: allValues,
    });
  };

  const getList = () => {
    fetch("/getList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((res) => {
        const { data } = res;
        console.log(data);
        dispatch({
          type: "page1/setList",
          payload: {
            list: data.list,
            column: data.column,
            total: data.total,
          },
        });
      });
  }

  return (
    <Form
      layout="inline"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
    >
      <Form.Item name="field1">
        <Input placeholder="请输入" style={{ width: 150, marginBottom: 16 }} />
      </Form.Item>

      <Form.Item name="field2">
        <Select placeholder="请选择" style={{ width: 150, marginBottom: 16 }}>
          <Select.Option value={1}>111</Select.Option>
          <Select.Option value={2}>222</Select.Option>
          <Select.Option value={3}>333</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Filter;
