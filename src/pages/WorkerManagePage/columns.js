import React from 'react';
import { Button, Avatar, Typography } from 'antd';
const { Title } = Typography;

import face from '@assets/images/face-1.jpg';
import face2 from '@assets/images/face-2.jpg';
import face3 from '@assets/images/face-3.jpg';
import face4 from '@assets/images/face-4.jpg';
import face5 from '@assets/images/face-5.jpeg';
import face6 from '@assets/images/face-6.jpeg';

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
export const getColumns = (triggerModalOpen) => [
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
