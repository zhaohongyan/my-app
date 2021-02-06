import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Space, Button, Row, Col, message } from 'antd'
import { uniqueId } from 'lodash'

import request from 'common/request'
import styles from './index.module.less'

function Page6(params) {
  const [list, setList] = useState([])

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    request('/api/blog/list', 'GET').then(res => {
      console.log(res)
      if (res.success) {
        setList(res.data)
      }
    })
  }

  const del = (e, id) => {
    e.preventDefault();
    request(`/api/blog/del?id=${id}`, 'POST').then(res => {
      console.log(res)
      if (res.success) {
        message.success('删除成功')
        getList()
      }
    })
  }

  return (
    <div className={styles.contrainer}>
      <h3>连接自己开发的后端服务器， 使用node开发</h3>
      <Space size="middle">
        <Button type="link" onClick={() => getList()}>刷新</Button>
        <Link to="/page6/edit">新建博客</Link>
      </Space>
      <ul>
        {
          list && list.length > 0 && list.map(item => {
            return (
              <li key={uniqueId()}>
                <Row type="flex" style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div>id: {item.id} <Link to={`/page6/detail/${item.id}`}>{item.title}</Link></div>
                    <div>{item.content}</div>
                    <div>{item.author} {moment(item.createTime).format('YYYY-MM-DD')}</div>
                  </Col>

                  <Col>
                    <Link to={`/page6/edit/${item.id}`}>编辑</Link>
                    <Button type="link" onClick={(e) => del(e, item.id)}>删除</Button>
                  </Col>
                </Row>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Page6;
