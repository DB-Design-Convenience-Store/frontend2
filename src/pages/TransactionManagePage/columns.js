import React from 'react';

// 숫자에 컴마 표시
function printNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// table code start
export const getColumns = () => [
  {
    title: '거래 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '물품 번호',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: '물품명',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: '고객 번호',
    dataIndex: 'customerId',
    key: 'customerId',
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
    render: function (text) {
      return <span>{!text ? '' : text.slice(0, 10)}</span>;
    },
  },
  {
    title: '거래 금액',
    dataIndex: 'totalPayed',
    key: 'totalPayed',
    render: function (text) {
      return <span style={{ fontWeight: 'bold' }}>{printNumberWithCommas(text)}원</span>;
    },
  },
  {
    title: '환불 여부',
    dataIndex: 'isRefund',
    key: 'isRefund',
    render: function (text) {
      return <span style={{ fontWeight: 'bold', color: text ? 'red' : 'green' }}>{text ? '환불' : '판매'}</span>;
    },
  },
];
