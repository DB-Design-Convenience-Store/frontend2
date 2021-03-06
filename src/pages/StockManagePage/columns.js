import { Button } from 'antd';
import React from 'react';

// table code start
export const getColumns = (triggerModalOpen) => [
  {
    title: '물품 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '물품 이름',
    dataIndex: 'name',
    key: 'name',
    render: function (text) {
      return <span>{text}</span>;
    },
  },
  {
    title: '매대',
    dataIndex: 'stand',
    key: 'stand',
    render: function (_, record) {
      return <span style={{ fontWeight: 'bold' }}>{record.location === 'Stand' ? 'O' : ''}</span>;
    },
  },
  {
    title: '창고',
    key: 'warehouse',
    dataIndex: 'warehouse',
    render: function (_, record) {
      return <span style={{ fontWeight: 'bold' }}>{record.location === 'Warehouse' ? 'O' : ''}</span>;
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
  {
    title: '수정',
    key: 'editButton',
    dataIndex: 'editButton',
    render: function (_, record) {
      console.log(record);
      return (
        <>
          <Button type="danger" onClick={() => triggerModalOpen(record)}>
            직원 수정
          </Button>
        </>
      );
    },
  },
];
