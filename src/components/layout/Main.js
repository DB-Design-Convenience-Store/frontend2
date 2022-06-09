import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Affix } from 'antd';
import Sidenav from './Sidenav';
import Header from './Header';
import Footer from './Footer';

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  let { pathname } = useLocation();
  pathname = pathname.replace('/', '');

  return (
    <Layout className={`layout-dashboard ${pathname === 'profile' ? 'layout-profile' : ''}`}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={250}
        theme="light"
        className="sider-primary ant-layout-sider-primary"
      >
        <Sidenav color="#fff" />
      </Sider>
      <Layout>
        <Affix>
          <AntHeader className="ant-header-fixed">
            <Header name={pathname} subName={pathname} />
          </AntHeader>
        </Affix>
        <Content className="content-ant">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Main;
