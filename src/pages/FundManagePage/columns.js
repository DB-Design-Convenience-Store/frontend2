import React from 'react';
import { Button } from 'antd';
import { SuccessBtn } from './style';

// 숫자에 컴마 표시
function printNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// table code start
export const getColumns = (triggerModalOpen) => [
  {
    title: '내역 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '수입 여부',
    key: 'isIncome',
    dataIndex: 'isIncome',
    render: function (isIncome) {
      return isIncome ? <SuccessBtn>수입</SuccessBtn> : <Button type="danger">지출</Button>;
    },
  },
  {
    title: '종류',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: '금액',
    key: 'amount',
    dataIndex: 'amount',
    render: function (text) {
      return <span>{printNumberWithCommas(text)}원</span>;
    },
  },
  {
    title: '입력 시점',
    key: 'insertedAt',
    dataIndex: 'insertedAt',
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
            내역 수정
          </Button>
        </>
      );
    },
  },
];
