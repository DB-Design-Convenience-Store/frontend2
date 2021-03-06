import { Modal } from 'antd';
import React from 'react';
import WarehousingAddOrChangeForm from './modal_form';

const ReceivingAddOrChangeModal = ({ isModalVisible, handleClose, values, refetch }) => {
  const MODAL_TITLE = 'UOS25 서울시립대점 입고 내역 등록';

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
      <WarehousingAddOrChangeForm onClose={handleClose} values={values} refetch={refetch} />
    </Modal>
  );
};

export default ReceivingAddOrChangeModal;
