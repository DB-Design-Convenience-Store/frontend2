import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import ReceivingAddOrChangeModal from './modal';

const ALL_RECEIVINGS = gql`
  query {
    getWarehousings {
      ok
      warehousings {
        id
        createdAt
        updatedAt
        product {
          id
          name
        }
        amount
      }
    }
  }
`;

function ReceivingManagePage() {
  const { loading, data } = useQuery(ALL_RECEIVINGS);
  const [receivings, setReceivings] = useState([]);
  useEffect(() => {
    if (!loading) {
      setReceivings(
        data.getWarehousings.warehousings.map((content) => ({
          id: content.id,
          product_id: content.product.id,
          product_name: content.product.name,
          amount: content.amount,
          date: content.createdAt,
        })),
      );
    }
  }, [loading]);
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
              title="입고 내역"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="all">전체</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                {!loading && (
                  <Table
                    columns={getColumns(triggerModalOpen)}
                    dataSource={receivings}
                    pagination={false}
                    className="ant-border-space"
                  />
                )}
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col span={6} offset={21}>
            <Button type="primary" onClick={showModal}>
              입고 등록
            </Button>
            <ReceivingAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReceivingManagePage;
