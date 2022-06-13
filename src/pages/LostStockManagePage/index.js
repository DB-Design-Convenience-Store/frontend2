import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';
import { Row, Col, Card, Radio, Table, Button } from 'antd';
import LostStockAddOrChangeModal from './modal';
import { ALL_LOSSES } from './graphql';

function LostStockManagePage() {
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

  const { loading, error, data } = useQuery(ALL_LOSSES);
  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const losses = data.getLosses.losses.map((content) => ({
    id: content.id,
    product_id: content.product.id,
    product_name: content.product.name,
    amount: content.amount,
    createdAt: content.createdAt.toString().slice(0, 10),
    reason: content.reason,
  }));

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
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : losses}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
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
