import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import FundAddOrChangeModal from './modal';
import { ALL_FUNDS } from './graphql';

function FundManagePage() {
  const [fundFilter, setFundFilter] = useState('all');

  const onChange = (e) => {
    setFundFilter(e.target.value);
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

  // useQuery가 hooks 중 맨 아래에 와야 하는 것 같습니다~
  const { loading, error, data, refetch } = useQuery(ALL_FUNDS);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const f = [...data.income.funds, ...data.loss.funds]
    .map((item) => ({
      key: item.id,
      id: item.id,
      isIncome: item.isIncome,
      type: item.type,
      insertedAt: item.createdAt.toString().slice(0, 10),
      amount: item.price,
    }))
    // 펀드 필터
    .filter(({ isIncome }) => {
      if (fundFilter === 'all') return true;
      if (fundFilter === 'true') return isIncome;
      if (fundFilter === 'false') return !isIncome;
    })
    // 서로 다른 배열을 가져오므로 정렬해야 함.
    .sort((a, b) => a.id - b.id);

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
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : f}
                  pagination={true}
                  className="ant-border-space"
                />
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
            <FundAddOrChangeModal
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

export default FundManagePage;
