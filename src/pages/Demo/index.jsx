import React from "react";
import {
  Button,
  Input,
  InputNumber,
  Select,
  Radio,
  Checkbox,
  Switch,
  TreeSelect,
  DatePicker,
  TimePicker,
  Table,
  Tabs,
  Upload,
  Divider,
  Space,
} from "antd";
import Avatar from './Upload';

function Demo() {
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      <Divider>Button Input InputNumber</Divider>
      <Space size="middle">
        <Button>Button</Button>
        <Input style={{ width: 200 }} />
        <InputNumber style={{ width: 200 }} />
      </Space>

      <Divider>Select Radio Checkbox</Divider>
      <Space size="middle">
        <Select style={{ width: 200 }}>
          <Select.Option value={1}>1</Select.Option>
          <Select.Option value={2}>2</Select.Option>
          <Select.Option value={3}>3</Select.Option>
        </Select>
        <Radio.Group>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
        </Radio.Group>
        <Checkbox.Group>
          <Checkbox value={1}>1</Checkbox>
          <Checkbox value={2}>2</Checkbox>
          <Checkbox value={3}>3</Checkbox>
        </Checkbox.Group>
      </Space>

      <Divider>DatePicker RangePicker TimePicker </Divider>
      <Space size="middle">
        <DatePicker />
        <DatePicker.RangePicker />
        <TimePicker />
      </Space>

      <Divider>Upload</Divider>
      <Avatar />

      <Divider>Tabs</Divider>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>

      <Divider>Table</Divider>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Demo;
