import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';
import { Row, Col, Card, Radio, Table, Button } from 'antd';
import ReturnAddOrChangeModal from './modal';
import { ALL_RETURNS } from './graphql';

function ReturnManagePage() {
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
  const { loading, error, data } = useQuery(ALL_RETURNS);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const returns = data.getReturns.returns.map((content) => ({
    ...content,
    product_id: content.product.id,
    product_name: content.product.name,
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
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : returns}
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
