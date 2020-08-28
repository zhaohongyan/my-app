import React from 'react'
import { Layout } from 'antd';
import { renderRoutes } from "react-router-config";
import CommonHeader from "../Header";
import CommonSider from "../Sider";
import { flattenRoutes } from '../../../router.config'; // 所有路由

const { Header, Footer, Sider, Content } = Layout;

const Frame = () => { 

  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <CommonSider />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <CommonHeader />
        </Header>
        <Content style={{ padding: 24 }}>
          {renderRoutes(flattenRoutes)}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default Frame;
