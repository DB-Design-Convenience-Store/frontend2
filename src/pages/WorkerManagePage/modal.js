import { Modal } from 'antd';
import React from 'react';
import AddOrChangeManagerForm from './modal_form';

const WorkerAddOrChangeModal = ({ isModalVisible, handleClose, values }) => {
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
      <AddOrChangeManagerForm onClose={handleClose} values={values} />
    </Modal>
  );
};

export default WorkerAddOrChangeModal;
