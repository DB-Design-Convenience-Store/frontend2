import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, Form, InputNumber, message, Select } from 'antd';

const { Option } = Select;

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

const TransactionAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...values,

      isRefund: values.isRefund ? 'true' : 'false',

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
        name="id"
        label="거래 번호"
        rules={[
          {
            required: true,
            message: '거래 번호는 필수값입니다.',
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
        name="product"
        label="물품 번호"
        rules={[
          {
            required: true,
            message: '물품 번호는 필수값입니다.',
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
        name="customer"
        label="고객 번호"
        rules={[
          {
            required: true,
            message: '고객 번호는 필수값입니다.',
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
            message: '개수는 필수값입니다.',
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
        name="isRefund"
        label="환불 여부"
        rules={[
          {
            required: true,
            message: '환불 여부는 필수값입니다.',
          },
        ]}
      >
        <Select placeholder="환불 여부를 선택해주세요...">
          <Option value="false">정상</Option>
          <Option value="true">환불</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionAddOrChangeForm;
