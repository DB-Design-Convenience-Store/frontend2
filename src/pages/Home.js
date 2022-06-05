import { Card, Col, Row, Typography, Timeline, Radio } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';

import Echart from '../components/chart/EChart';
import LineChart from '../components/chart/LineChart';

import ava1 from '../assets/images/logo-shopify.svg';

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const count = [
    {
      today: '일매출',
      title: '₩ 752,200',
      persent: '-40%',
      bnb: 'redtext',
    },
    {
      today: '주매출',
      title: '₩ 14,020,100',
      persent: '+20%',
      bnb: 'bnb2',
    },
    {
      today: '월매출',
      title: '₩ 50,105,200',
      persent: '-20%',
      bnb: 'redtext',
    },
    {
      today: '연매출',
      title: '₩ 720,101,200',
      persent: '+10%',
      bnb: 'bnb2',
    },
  ];

  const list = [
    {
      img: ava1,
      Title: '포카칩(기본)',
      bud: '₩100,000',
      progress: 50,
      member: '5/30 (월)',
    },
    {
      img: ava1,
      Title: '새우탕컵라면',
      bud: '₩50,000',
      progress: 50,
      member: '5/30 (월)',
    },
    {
      img: ava1,
      Title: '참치김밥',
      bud: '₩100,000',
      progress: 50,
      member: '5/30 (월)',
    },
    {
      img: ava1,
      Title: '빼빼로(기본)',
      bud: '₩50,000',
      progress: 50,
      member: '5/30 (월)',
    },
  ];

  const timelineList = [
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
    },
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
    },
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
      color: 'gray',
    },
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
      color: 'gray',
    },
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
      color: 'gray',
    },
    {
      title: '₩ 2,500 - 새우탕컵라면 외 5종',
      time: '5/30 (월)',
      color: 'gray',
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={24}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>품목별 입고 내역</Title>
                  <Paragraph className="lastweek">
                    주문-입고 성공율 <span className="blue">100%</span>
                  </Paragraph>
                </div>
                <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">전체</Radio.Button>
                      <Radio.Button value="b">주요</Radio.Button>
                      <Radio.Button value="c">비인기</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>주문날짜</th>
                      <th>주문금액</th>
                      <th>주문재고수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{' '}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}{' '}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>소비자 판매 내역</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  어제 이 시간보다 <span className="bnb2">20%</span> 상승
                </Paragraph>

                <Timeline
                  pending="실시간 확인중..."
                  className="timelinelist"
                  reverse={false}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
