import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import StockAddOrChangeModal from './modal';

const ALL_STOCKS = gql`
  query {
    getStocks {
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
  }
`;

function StockManagePage() {
  const [modifiedStocks, setModifiedStocks] = useState({});
  const [stocks, setStocks] = useState([]);
  const { loading, data } = useQuery(ALL_STOCKS);
  useEffect(() => {
    if (!loading) {
      data.getStocks.stocks.map((stock) => {
        if (stock.location == 'Warehouse') {
          setModifiedStocks((prevState) => ({ ...prevState, [stock.id]: { warehouse: stock.amount } }));
        } else {
          setModifiedStocks((prevState) => ({ ...prevState, [stock.id]: { stand: stock.amount } }));
        }
      });
      setStocks(
        Object.keys(modifiedStocks).map((key) => ({
          id: key,
          warehouse: modifiedStocks[key].warehouse ? modifiedStocks[key].warehouse : 0,
          stand: modifiedStocks[key].stand ? modifiedStocks[key].stand : 0,
          amount:
            (modifiedStocks[key].warehouse ? modifiedStocks[key].warehouse : 0) +
            (modifiedStocks[key].stand ? modifiedStocks[key].stand : 0),
        })),
      );
    }
  }, [loading, modifiedStocks]);
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
                {!loading && (
                  <Table
                    columns={getColumns(triggerModalOpen)}
                    dataSource={stocks}
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
