import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import AddOrChangeManagerForm from './modal_form';

const WorkerAddOrChangeModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const MODAL_TITLE = 'UOS25 서울시립대점 직원 등록';

  return (
    <>
      {/* Modal을 여는 페이지 요소가 위치하는 영역 */}
      <Button type="primary" onClick={showModal}>
        직원 등록
      </Button>

      {/* Modal 본문 영역 */}
      <Modal
        title={MODAL_TITLE}
        visible={isModalVisible}
        onOk={handleOk}
        bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}
        footer={null}
      >
        <AddOrChangeManagerForm onClose={handleOk} />
      </Modal>
    </>
  );
};

export default WorkerAddOrChangeModal;
