// table code start
export const getColumns = () => [
  {
    title: '발주 번호',
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
    title: '요청일자',
    key: 'date',
    dataIndex: 'date',
  },
];
