import { Modal } from 'antd';
import React from 'react';
import LostStockAddOrChangeForm from './modal_form';

const LostStockAddOrChangeModal = ({ isModalVisible, handleClose, values }) => {
  const MODAL_TITLE = 'UOS25 서울시립대점 재고 손실 내역 등록';

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
      <LostStockAddOrChangeForm onClose={handleClose} values={values} />
    </Modal>
  );
};

export default LostStockAddOrChangeModal;
