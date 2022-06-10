import { Modal } from 'antd';
import React from 'react';
import EmployeeAddOrChangeForm from './modal_form';

const EmployeeAddOrChangeModal = ({ isModalVisible, handleClose, values }) => {
  const MODAL_TITLE = 'UOS25 서울시립대점 직원 등록';

  return (
    <Modal
      title={MODAL_TITLE}
      visible={isModalVisible}
      onOk={handleClose}
      onCancel={handleClose}
      maskClosable={false}
      bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}
      footer={null}
    >
      <EmployeeAddOrChangeForm onClose={handleClose} values={values} />
    </Modal>
  );
};

export default EmployeeAddOrChangeModal;
