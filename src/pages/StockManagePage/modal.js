import { Modal } from 'antd';
import React from 'react';
import StockAddOrChangeForm from './modal_form';

const StockAddOrChangeModal = ({ isModalVisible, handleClose, values, refetch }) => {
  const MODAL_TITLE = 'UOS25 서울시립대점 재고 내역 수정';

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
      <StockAddOrChangeForm onClose={handleClose} values={values} refetch={refetch} />
    </Modal>
  );
};

export default StockAddOrChangeModal;
