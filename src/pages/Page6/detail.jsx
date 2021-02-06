import React, { useState, useEffect } from 'react'
import request from 'common/request'
// import Axios from 'axios';


function BlogDetail({ match }) {
  const { params } = match;
  const { id } = params;

  const [detail, setDetail] = useState({})

  useEffect(() => {
    request('/api/blog/detail', 'GET', { id }).then(res => {
      if (res.success) {
        setDetail(res.data || {})
      }
    })

    // const req1 = () => {
    //   return request('/api/blog/detail', 'GET', { id: 1 });
    // }
    // const req2 = () => {
    //   return request('/api/blog/detail', 'GET', { id: 2 });
    // }
    // const req3 = () => {
    //   return request('/api/blog/detail', 'GET', { id: 9 });
    // }

    // Axios.all([req1(), req2(), req3()])
    //   .then(Axios.spread((result1, result2, result3) => {
    //     console.log(result1, result2, result3)
    //   }))

    // Promise.all([req1(), req2(), req3()])
    //   .then(result => {
    //     console.log(result)
    //     console.log(result[0])
    //     console.log(result[1])
    //     console.log(result[2])
    //   })

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