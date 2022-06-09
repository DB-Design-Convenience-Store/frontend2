import React from 'react';
import { data } from './data';
import { columns } from './columns';

import { Row, Col, Card, Radio, Table } from 'antd';

/*
  직원번호
  이름
  역할
  주간근무시간 dayWorkTime
  야간근무시간 nightWorkTime
  급여 salary
  고용일자 hidredDate
  해고일자 firedDate
  급여지급일자 payDate
*/
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
