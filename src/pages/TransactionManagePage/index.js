import React, { useState } from 'react';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import TransactionAddOrChangeModal from './modal';
import { ALL_TX } from './graphql';
import { useQuery } from '@apollo/client';

function TransactionManagePage() {
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

  // useQuery가 hooks 중 맨 아래에 와야 하는 것 같습니다~
  const { loading, error, data, refetch } = useQuery(ALL_TX);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const txs = data.getTransactions.transactions.map((item) => ({
    ...item,
    key: item.id,
    customerId: item.customer.id,
    productId: item.product.id,
    productName: item.product.name,
    totalPayed: item.amount * item.product.price,
  }));

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="거래 내역 목록"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">전체</Radio.Button>
                    <Radio.Button value="b">판매</Radio.Button>
                    <Radio.Button value="c">환불</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : txs}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col span={6} offset={22}>
            <Button type="primary" onClick={showModal}>
              내역 등록
            </Button>
            <TransactionAddOrChangeModal
              isModalVisible={isModalVisible}
              handleClose={handleClose}
              values={values}
              refetch={refetch}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TransactionManagePage;
