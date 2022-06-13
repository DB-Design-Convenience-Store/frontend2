import React, { useContext, useEffect } from 'react';
import { Row, Col, Breadcrumb, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { profile } from './icons';
import { UserContext } from '../../../store/UserContext';

function Header({ name, subName }) {
  // eslint-disable-next-line no-undef
  useEffect(() => window.scrollTo(0, 0));

  const { isLoggedIn, logout } = useContext(UserContext);

  const onLogout = () => {
    logout();
    message.success('로그아웃이 완료되었습니다.');
  };

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">UOS25</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: 'capitalize' }}>{name.replace('/', '')}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span className="ant-page-header-heading-title" style={{ textTransform: 'capitalize' }}>
              {subName.replace('/', '')}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          {isLoggedIn ? (
            <Link to="/dashboard" onClick={onLogout} className="btn-sign-in">
              {profile}
              <span>로그아웃</span>
            </Link>
          ) : (
            <Link to="/sign-in" className="btn-sign-in">
              {profile}
              <span>로그인</span>
            </Link>
          )}

          <Input className="header-search" placeholder="Type here..." prefix={<SearchOutlined />} />
        </Col>
      </Row>
    </>
  );
}

export default Header;
