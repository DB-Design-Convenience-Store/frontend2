import React from 'react';
import { Button } from 'antd';

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
  },
  {
    title: '매대 개수',
    dataIndex: 'stand',
    key: 'stand',
  },
  {
    title: '창고 개수',
    key: 'warehouse',
    dataIndex: 'warehouse',
  },
  {
    title: '총 개수',
    key: 'amount',
    dataIndex: 'amount',
  },
  {
    key: 'editButton',
    dataIndex: 'editButton',
    render: function (_, record) {
      return (
        <>
          <Button type="danger" onClick={() => triggerModalOpen(record)}>
            재고 변경
          </Button>
        </>
      );
    },
  },
];
