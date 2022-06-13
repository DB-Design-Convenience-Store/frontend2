import React from 'react';
import { Button } from 'antd';

/*
재고손실번호	물품번호	개수	손실일자	손실사유
id	product	amount	createdAt	reason
*/
// table code start
export const getColumns = (triggerModalOpen) => [
  {
    title: '재고 손실 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '물품 번호',
    dataIndex: 'product_id',
    key: 'product_id',
  },
  {
    title: '물품 이름',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: '개수',
    key: 'amount',
    dataIndex: 'amount',
  },
  {
    title: '손실 일자',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: '손실 사유',
    key: 'reason',
    dataIndex: 'reason',
  },
  {
    title: '수정',
    key: 'editButton',
    dataIndex: 'editButton',
    render: function (_, record) {
      return (
        <>
          <Button type="danger" onClick={() => triggerModalOpen(record)}>
            내역 수정
          </Button>
        </>
      );
    },
  },
];
