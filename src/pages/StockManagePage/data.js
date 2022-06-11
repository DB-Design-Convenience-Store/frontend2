export const data = [
  {
    id: '1',
    name: '포카칩',
    stand: 40,
    warehouse: 50,
  },
  {
    id: '2',
    name: '새우탕',
    stand: 10,
    warehouse: 50,
  },
  {
    id: '3',
    name: '참치김밥',
    stand: 40,
    warehouse: 100,
  },
  {
    id: '4',
    name: '빼빼로',
    stand: 20,
    warehouse: 0,
  },
  {
    id: '5',
    name: '월드콘',
    stand: 60,
    warehouse: 55,
  },
  {
    id: '6',
    name: '바나나우유',
    stand: 0,
    warehouse: 0,
  },
];

data.map((product) => (product.amount = product.stand + product.warehouse));
