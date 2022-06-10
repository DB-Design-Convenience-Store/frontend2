import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, DatePicker, Form, Input, InputNumber, message } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const LostStockAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...values,
      // date picker는 moment를 써줘야 함 (antd)
      createdAt: !values.createdAt ? '' : moment(values.createdAt),
    });
  }, [values]);

  /* eslint-disable */
  const onFinish = (values) => {
    console.log(JSON.stringify(values));
    message.success("등록에 성공하였습니다: " + JSON.stringify(values));
    form.resetFields();
    onClose();
  };

  const onFinishFailed = (values) => {
    console.log(JSON.stringify(values));
    message.error("등록에 실패하였습니다: " + JSON.stringify(values));
  }

  return (
    <Form {...formItemLayout} form={form} name="worker" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large" scrollToFirstError>

      <Form.Item
        name="product"
        label="물품번호"
        rules={[
          {
            required: true,
            message: '물품번호는 필수값입니다',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="amount"
        label="개수"
        rules={[
          {
            required: true,
            message: '개수는 필수값입니다',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="createdAt"
        label="손실 일자"
        rules={[
          {
            required: true,
            message: '손실 일자는 필수값입니다.',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>


      <Form.Item
        name="reason"
        label="손실 사유"
        rules={[
          {
            required: true,
            message: '손실 사유는 필수값입니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LostStockAddOrChangeForm;
