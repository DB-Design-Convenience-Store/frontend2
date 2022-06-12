import { Modal } from 'antd';
import React from 'react';
import ReturnAddOrChangeForm from './modal_form';

const ReturnAddOrChangeModal = ({ isModalVisible, handleClose, values }) => {
  const MODAL_TITLE = 'UOS25 서울시립대점 반품 관리';

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
      <ReturnAddOrChangeForm onClose={handleClose} values={values} />
    </Modal>
  );
};

export default ReturnAddOrChangeModal;
