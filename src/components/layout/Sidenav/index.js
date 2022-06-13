import React from 'react';
import { Menu, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@assets/images/uos25-2.png';
import { dashboard, signin } from './icons';
import { navList } from './dummy';

function Sidenav() {
  const { pathname: page } = useLocation();

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {navList.map((nav) => {
          return nav.header ? (
            <Menu.Item className="menu-item-header" key={nav.name}>
              {nav.name}
            </Menu.Item>
          ) : (
            <Menu.Item key={nav.name}>
              <NavLink to={nav.link}>
                <span
                  className="icon"
                  style={{
                    background: page === nav.link,
                  }}
                >
                  {nav.icon}
                </span>
                <span className="label">{nav.name}</span>
              </NavLink>
            </Menu.Item>
          );
        })}
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="icon">{signin}</span>
            <span className="label">로그인</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div className="footer-box">
          <span className="icon">{dashboard}</span>
          <h6>본사에 문의하기</h6>
          <p>UOS25 서울시립대점</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            문의
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
