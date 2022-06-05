import { Row, Col, Card, Radio, Table, Button, Avatar, Typography } from 'antd';

import face from '../assets/images/face-1.jpg';
import face2 from '../assets/images/face-2.jpg';
import face3 from '../assets/images/face-3.jpg';
import face4 from '../assets/images/face-4.jpg';
import face5 from '../assets/images/face-5.jpeg';
import face6 from '../assets/images/face-6.jpeg';

const { Title } = Typography;

// table code start
const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    width: '32%',
  },
  {
    title: '직책',
    dataIndex: 'function',
    key: 'function',
  },

  {
    title: '근무여부',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '채용일',
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
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>김성빈</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>매니저</Title>
          <p>UOS25</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          근무중
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: '2',
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>오우택</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>알바</Title>
          <p>UOS25</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">근무중</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: '3',
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>현창호</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>알바</Title>
          <p>UOS25</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">근무중</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: '4',
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>조용재</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>알바</Title>
          <p>UOS25</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">근무중</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: '5',
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>이한솔</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>알바</Title>
          <p>UOS25</p>
        </div>
      </>
    ),
    status: (
      <>
        <Button className="tag-badge">근무중</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/03/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: '6',
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>김종현</Title>
            <p>010-0000-0000</p>
          </div>
        </Avatar.Group>{' '}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>알바</Title>
          <p>UOS25</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">근무중</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <a href="#pablo">Edit</a>
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
              title="직원 관리"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">근무중</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
