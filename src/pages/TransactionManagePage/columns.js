import React from 'react';
import { Avatar, Typography } from 'antd';
const { Title } = Typography;

import face from '@assets/images/face-1.jpg';

// table code start
export const getColumns = () => [
  {
    title: '거래 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '물품 번호',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: '고객 번호',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: '개수',
    key: 'amount',
    dataIndex: 'amount',
  },
  {
    title: '거래 일자',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: '환불 여부',
    dataIndex: 'isRefund',
    key: 'isRefund',
    render: function (text) {
      return <span>{text ? '환불' : '판매'}</span>;
    },
  },
  {
    title: '거래 담당자',
    dataIndex: 'transactionManager',
    key: 'transactionManager',
    render: function () {
      return (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" shape="square" size={40} src={face}></Avatar>
            <div className="avatar-info">
              <Title level={5}>김성빈</Title>
            </div>
          </Avatar.Group>{' '}
        </>
      );
    },
  },
];
