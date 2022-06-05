import React from 'react';
import { Row, Col, Card, Radio, Table, Button, Avatar, Typography } from 'antd';

const { Title } = Typography;

// table code start
const columns = [
  {
    title: '품목명',
    dataIndex: 'name',
    key: 'name',
    width: '32%',
  },
  {
    title: '재고 수량',
    dataIndex: 'function',
    key: 'function',
  },
  {
    title: '주문 일자',
    key: 'employed',
    dataIndex: 'employed',
  },
];

const data = [
  {
    key: '1',
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>포카칩(기본)</Title>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>50</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">재고 수정</a>
        </div>
      </>
    ),
  },

  {
    key: '2',
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>새우탕컵라면</Title>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>50</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">재고 수정</a>
        </div>
      </>
    ),
  },

  {
    key: '3',
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>참치김밥</Title>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>50</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">재고 수정</a>
        </div>
      </>
    ),
  },
  {
    key: '4',
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>빼빼로(기본)</Title>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>50</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">재고 수정</a>
        </div>
      </>
    ),
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
              title="재고 관리"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
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
