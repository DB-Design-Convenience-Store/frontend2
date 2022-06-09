import React from 'react';
import { Row, Col, Card, Radio, Table, Button, Avatar, Typography } from 'antd';

import face from '@assets/images/face-1.jpg';
import face2 from '@assets/images/face-2.jpg';
import face3 from '@assets/images/face-3.jpg';
import face4 from '@assets/images/face-4.jpg';
import face5 from '@assets/images/face-5.jpeg';
import face6 from '@assets/images/face-6.jpeg';

const { Title } = Typography;

// 사진 6개 돌려쓰기 위함.
const getRandomFace = () => {
  const val = Math.random();
  if (val < 0.16) return face;
  else if (val < 0.32) return face2;
  else if (val < 0.48) return face3;
  else if (val < 0.54) return face4;
  else if (val < 0.7) return face5;
  return face6;
};

// 숫자에 컴마 표시
function printNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// table code start
const columns = [
  {
    title: '직원 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    render: function (text) {
      return (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" shape="square" size={40} src={getRandomFace()}></Avatar>
            <div className="avatar-info">
              <Title level={5}>{text}</Title>
            </div>
          </Avatar.Group>{' '}
        </>
      );
    },
  },
  {
    title: '역할',
    dataIndex: 'role',
    key: 'role',
    render: function (text) {
      return (
        <>
          <div className="author-info">
            <Title level={5}>{text}</Title>
            <p>UOS25</p>
          </div>
        </>
      );
    },
  },
  // 근무 여부는 구현이 지금 안 되므로 PASS!
  {
    title: '근무여부',
    key: 'status',
    dataIndex: 'status',
    render: function (text) {
      return (
        <>
          <Button type={text === '근무중' ? 'primary' : ''} className={text === '근무중' ? 'tag-primary' : 'tag-badge'}>
            {text}
          </Button>
        </>
      );
    },
  },
  {
    title: '주간근무시간',
    key: 'dayWorkTime',
    dataIndex: 'dayWorkTime',
    render: function (text) {
      return <span>{text}시간</span>;
    },
  },

  {
    title: '야간근무시간',
    key: 'nightWorkTime',
    dataIndex: 'nightWorkTime',
    render: function (text) {
      return <span>{text}시간</span>;
    },
  },
  {
    title: '급여',
    key: 'salary',
    dataIndex: 'salary',
    render: function (text) {
      return <span>{printNumberWithCommas(text)}원</span>;
    },
  },
  {
    title: '고용일자',
    key: 'hiredDate',
    dataIndex: 'hiredDate',
  },

  {
    title: '해고일자',
    key: 'firedDate',
    dataIndex: 'firedDate',
  },
  {
    title: '급여지급일자',
    key: 'payDate',
    dataIndex: 'payDate',
  },
  {
    title: '수정',
    key: 'editButton',
    dataIndex: 'editButton',
    render: function (_, record, index) {
      console.log(record, index);
      return (
        <>
          <Button type="secondary" className="tag-badge">
            직원 수정
          </Button>
        </>
      );
    },
  },
];

const data = [
  {
    key: '1',
    id: 1,
    name: '김성빈',
    role: '매니저',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '근무중',
  },
  {
    key: '2',
    id: 2,
    name: '오우택',
    role: '알바',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '근무중',
  },
  {
    key: '3',
    id: 3,
    name: '현창호',
    role: '매니저',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '근무중',
  },
  {
    key: '4',
    id: 4,
    name: '조용재',
    role: '알바',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '준비중',
  },
  {
    key: '5',
    id: 5,
    name: '이한솔',
    role: '알바',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '휴식중',
  },
  {
    key: '6',
    id: 6,
    name: '김종현',
    role: '알바',
    dayWorkTime: 4,
    nightWorkTime: 4,
    salary: 1080000,
    hiredDate: '2022-06-09',
    firedDate: '2022-06-09',
    payDate: '2022-06-09',
    status: '휴식중',
  },
];

// project table start
function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="직원 목록"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">전원</Radio.Button>
                    <Radio.Button value="b">근무중</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table columns={columns} dataSource={data} pagination={false} className="ant-border-space" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
