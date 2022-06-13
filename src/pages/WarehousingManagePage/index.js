import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';
import { Row, Col, Card, Radio, Table, Button } from 'antd';
import ReceivingAddOrChangeModal from './modal';
import { ALL_WAREHOUSINGS } from './graphql';

function WarehousingManagePage() {
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

  // useQuery가 hooks 중 맨 아래에 와야 하는 것 같습니다~
  const { loading, error, data } = useQuery(ALL_WAREHOUSINGS);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const w = data.getWarehousings.warehousings.map((content) => ({
    key: content.id,
    id: content.id,
    product_id: content.product.id,
    product_name: content.product.name,
    amount: content.amount,
    date: content.createdAt.toString().slice(0, 10),
  }));

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
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : w}
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
              입고 등록
            </Button>
            <ReceivingAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WarehousingManagePage;
