import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import StockAddOrChangeModal from './modal';

const ALL_STOCKS = gql`
  query getStocks {
    ok
    stocks {
      id
      createdAt
      updatedAt
      location
      amount
      productId
    }
  }
`;

function StockManagePage() {
  const stocks = useQuery(ALL_STOCKS);
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [values, setValues] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const triggerModalOpen = (record) => {
    setValues(record);
    showModal();
  };

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="재고 현황"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="all">전체</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={stocks}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col span={6} offset={21}>
            <Button type="primary" onClick={showModal}>
              재고 등록
            </Button>
            <StockAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StockManagePage;
