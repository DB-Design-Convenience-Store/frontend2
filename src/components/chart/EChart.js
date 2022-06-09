import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Row, Col, Typography } from 'antd';
import eChart from './configs/eChart';

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      value: '300,000',
      title: '방문자수',
    },
    {
      value: '300,000',
      title: '결제수',
    },
    {
      value: '900,000',
      title: '입고물품수',
    },
    {
      value: '700,000',
      title: '판매물품수',
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart className="bar-chart" options={eChart.options} series={eChart.series} type="bar" height={220} />
      </div>
      <div className="chart-vistior">
        <Title level={5}>주별 매출 현황</Title>
        <Paragraph className="lastweek">
          저번 주 보다 <span className="bnb2">+30%</span> 상승하였습니다.
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.value}</Title>
                <span>{v.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
