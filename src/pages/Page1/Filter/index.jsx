import React from "react";
import { Form, Input, Select, Button } from "antd";
import { useStore, useDispatch, useSelector } from "react-redux";
import { nameSpace } from "../reducer";
import request from "../../../common/request";
import { GET_LIST, GET_USER } from "../../../common/api";

function Filter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Page1Reducers);
  const { searchParams } = state;

  const onFinish = (values) => {
    console.log("Success:", values);
    const params = {
      ...searchParams,
      ...values,
    };
    getList(params);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onValuesChange = (changedValues, allValues) => {
    console.log("onValuesChange", changedValues, allValues);
    dispatch({
      type: `${nameSpace}/changeSearch`,
      payload: allValues,
    });
  };

  const getList = (params) => {
    request(GET_LIST, "POST", params).then((res) => {
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
    });
  };

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
