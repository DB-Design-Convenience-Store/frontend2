import React, { useEffect } from 'react';
import { Row, Col, Breadcrumb, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { profile } from './icons';

function Header({ name, subName }) {
  // eslint-disable-next-line no-undef
  useEffect(() => window.scrollTo(0, 0));

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
          <Link to="/sign-in" className="btn-sign-in">
            {profile}
            <span>로그인</span>
          </Link>
          <Input className="header-search" placeholder="Type here..." prefix={<SearchOutlined />} />
        </Col>
      </Row>
    </>
  );
}

export default Header;
