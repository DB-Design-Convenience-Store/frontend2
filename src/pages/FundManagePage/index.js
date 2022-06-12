import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import FundAddOrChangeModal from './modal';

const ALL_INCOMES = gql`
  query {
    getFunds(input: { isIncome: true }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
  }
`;
const ALL_OUTCOMES = gql`
  query {
    getFunds(input: { isIncome: false }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
  }
`;

function FundManagePage() {
  const incomeData = useQuery(ALL_INCOMES);
  const outcomeData = useQuery(ALL_OUTCOMES);
  const [funds, setFunds] = useState([]);
  const [fundsData, setFundsData] = useState([]);
  useEffect(() => {
    if (!incomeData.loading && !outcomeData.loading) {
      const data = incomeData.data.getFunds.funds.concat(outcomeData.data.getFunds.funds);
      setFundsData(
        data.map((content) => ({
          id: content.id,
          isIncome: content.isIncome,
          type: content.type,
          insertedAt: content.createdAt.toString().slice(0, 10),
          amount: content.price,
        })),
      );
    }
  }, [incomeData.loading, outcomeData.loading]);
  useEffect(() => {
    setFunds(fundsData);
  }, [fundsData]);
  const onChange = (e) => {
    if (e.target.value == 'all') {
      setFunds(fundsData);
    } else if (e.target.value == 'true') {
      setFunds(fundsData.filter((fund) => fund.isIncome));
    } else {
      setFunds(fundsData.filter((fund) => !fund.isIncome));
    }
  };

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
              title="자금 내역"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">전체</Radio.Button>
                    <Radio.Button value="true">수입</Radio.Button>
                    <Radio.Button value="false">지출</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                {!incomeData.loading && !outcomeData.loading && (
                  <Table
                    columns={getColumns(triggerModalOpen)}
                    dataSource={funds}
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
            <FundAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FundManagePage;
