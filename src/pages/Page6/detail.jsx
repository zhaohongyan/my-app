import React, { useState, useEffect } from 'react'
import request from 'common/request'


function BlogDetail({ match }) {
  const { params } = match;
  const { id } = params;

  const [detail, setDetail] = useState({})

  useEffect(() => {
    request('/api/blog/detail', 'GET', { id }).then(res => {
      console.log(res)
      if (res.success) {
        setDetail(res.data || {})
      }
    })
  }, [id])

  return (
    <div>
      <h3>博客详情</h3>
      <div>id：{detail.id}</div>
      <div>标题：{detail.title}</div>
      <div>内容：{detail.content}</div>
    </div>
  )
}

export default BlogDetail