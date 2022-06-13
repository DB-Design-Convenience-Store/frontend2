import React from 'react';

// table code start
export const getColumns = () => [
  {
    title: '물품 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '물품 이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '매대',
    dataIndex: 'stand',
    key: 'stand',
    render: function (_, record) {
      return <span>{record.location === 'Stand' ? 'O' : ''}</span>;
    },
  },
  {
    title: '창고',
    key: 'warehouse',
    dataIndex: 'warehouse',
    render: function (_, record) {
      return <span>{record.location === 'Warehouse' ? 'O' : ''}</span>;
    },
  },
  {
    title: '개수',
    key: 'amount',
    dataIndex: 'amount',
    render: function (text) {
      return <span>{text}개</span>;
    },
  },
];
