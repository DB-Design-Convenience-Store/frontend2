import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Typography } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import lineChart from './configs/lineChart';

function LineChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>전품목 재고 처리 추이</Title>
          <Paragraph className="lastweek">
            폐기 재고가 <span className="bnb2">-20%</span> 감소하였습니다.
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} 판매</li>
            <li>{<MinusOutlined />} 입고</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={'100%'}
      />
    </>
  );
}

export default LineChart;
