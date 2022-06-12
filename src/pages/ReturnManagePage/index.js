import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import ReturnAddOrChangeModal from './modal';

const ALL_RETURNS = gql`
  query {
    getReturns {
      ok
      returns {
        id
        createdAt
        updatedAt
        product {
          id
          name
        }
        amount
        reason
      }
    }
  }
`;

function ReturnManagePage() {
  const { loading, data } = useQuery(ALL_RETURNS);
  const [returns, setReturns] = useState([]);
  useEffect(() => {
    if (!loading) {
      setReturns(
        data.getReturns.returns.map((content) => ({
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
              title="반품 내역"
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
                    dataSource={returns}
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
              반품 등록
            </Button>
            <ReturnAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReturnManagePage;
