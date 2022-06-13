import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';
import { Row, Col, Card, Radio, Table, Button } from 'antd';
import EmployeeAddOrChangeModal from './modal';
import { ALL_EMPLOYEES } from './graphql';

function EmployeeManagePage() {
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
  const { loading, error, data, refetch } = useQuery(ALL_EMPLOYEES);

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;

  const employees = data.getUsers.users
    .map((emp) => ({
      ...emp,
      key: emp.id,
      hiredDate: !emp.hiredDate ? '' : emp.hiredDate.slice(0, 10),
      firedDate: !emp.firedDate ? '' : emp.firedDate.slice(0, 10),
      payDate: !emp.payDate ? '' : emp.payDate.slice(0, 10),
      status: '근무중',
    }))
    // 직원 번호 순으로 정렬되지 않아서 옴
    .sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="직원 목록"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">전원</Radio.Button>
                    <Radio.Button value="b">근무중</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={getColumns(triggerModalOpen)}
                  dataSource={loading ? [] : employees}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
        {/* 아래의 Row, Col 의 배치 방식은 아직 잘 모르겠다. */}
        <Row gutter={[24, 0]}>
          <Col span={6} offset={22}>
            <Button type="primary" onClick={showModal}>
              직원 등록
            </Button>
            <EmployeeAddOrChangeModal
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

export default EmployeeManagePage;
