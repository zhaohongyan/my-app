import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import request from 'common/request'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    span: 16,
  },
};

function BlogEdit({ match }) {
  const { params } = match;
  const { id } = params;

  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      request('/api/blog/detail', 'GET', { id }).then(res => {
        if (res.success) {
          form.setFieldsValue({
            title: res.data.title,
            content: res.data.content,
          })
        }
      })
    }
  }, [form, id])

  const onFinish = (values) => {
    console.log("Success:", values);
    let url = '/api/blog/new';
    if (id) {
      url = `/api/blog/update?id=${id}`
    }
    request(url, 'POST', values).then(res => {
      if (res.success) {
        message.success('保存成功')
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 800, margin: 'auto' }}
    >
      <h3>新增、编辑博客</h3>
      <Form.Item
        {...tailLayout}
        label="title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        label="content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please input your content!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogEdit;