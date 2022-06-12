import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { getColumns } from './columns';

import { Row, Col, Card, Radio, Table, Button } from 'antd';
import EmployeeAddOrChangeModal from './modal';

const ALL_EMPLOYEES = gql`
  query {
    getUsers {
      ok
      users {
        id
        name
        role
        dayWorkTime
        nightWorkTime
        salary
        hiredDate
        firedDate
        payDate
      }
    }
  }
`;

function EmployeeManagePage() {
  const { loading, data } = useQuery(ALL_EMPLOYEES);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    if (!loading) {
      setEmployees(
        data.getUsers.users.map((content) => ({
          id: content.id,
          name: content.name,
          role: content.role,
          status: '',
          dayWorkTime: content.dayWorkTime,
          nightWorkTime: content.nightWorkTime,
          salary: content.salary,
          hiredDate: content.hiredDate,
          firedDate: content.firedDate,
          payDate: content.payDate,
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
                {!loading && (
                  <Table
                    columns={getColumns(triggerModalOpen)}
                    dataSource={employees}
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
          <Col span={6} offset={22}>
            <Button type="primary" onClick={showModal}>
              직원 등록
            </Button>
            <EmployeeAddOrChangeModal isModalVisible={isModalVisible} handleClose={handleClose} values={values} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EmployeeManagePage;
