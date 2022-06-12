import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import LostStockAddOrChangeModal from './modal';

const ALL_LOSSES = gql`
  query {
    getLosses {
      ok
      losses {
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

function LostStockManagePage() {
  const { loading, data } = useQuery(ALL_LOSSES);
  const [losses, setLosses] = useState([]);
  useEffect(() => {
    if (!loading) {
      setLosses(
        data.getLosses.losses.map((content) => ({
          id: content.id,
          product_id: content.product.id,
          product_name: content.product.name,
          amount: content.amount,
          createdAt: content.createdAt.toString().slice(0, 10),
          reason: content.reason,
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
    console.log('onEdit: ', record);
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
              title="재고 손실 내역"
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
                    dataSource={losses}
                    pagination={false}
                    className="ant-border-space"
                  />
                )}
              </div>
            </Card>
          </Col>
        </Row>
        {/* 아래의 Row, Col 의 배치 방식은 아직 잘 모르겠다. */}
        <Row gutter={[24, 0]}>
          <Col span={6} offset={21}>
            <Button type="primary" onClick={showModal}>
              내역 등록
            </Button>
            <LostStockAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LostStockManagePage;
