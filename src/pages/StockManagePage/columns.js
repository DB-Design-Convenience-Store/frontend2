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
];
