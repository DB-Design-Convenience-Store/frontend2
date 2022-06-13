import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';
import { Row, Col, Card, Radio, Table, Button } from 'antd';
import StockAddOrChangeModal from './modal';
import { ALL_STOCKS } from './graphql';

function StockManagePage() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [values, setValues] = useState({ productId: '', location: 'Warehouse', amount: 0 });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setValues({ productId: '', location: 'Warehouse', amount: 0 });
  };

  // useQuery가 hooks 중 맨 아래에 와야 하는 것 같습니다~
  const { loading, error, data } = useQuery(ALL_STOCKS);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const d = data.getStocks.stocks.map((item) => ({
    warehouse: 0,
    stand: 0,
    ...item,
    id: item.product.id,
    name: item.product.name,
  }));

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
                  columns={getColumns()}
                  dataSource={loading ? [] : d}
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
