import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, DatePicker, Form, Input, InputNumber, message, Select } from 'antd';

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

const FundAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...values,
      // date picker는 moment를 써줘야 함 (antd)
      isIncome: values.isIncome ? 'true' : 'false',
      insertedAt: !values.insertedAt ? '' : moment(values.insertedAt),
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
        name="isIncome"
        label="수입 여부"
        rules={[
          {
            required: true,
            message: '수입 여부는 필수값입니다.',
          },
        ]}
      >
        <Select placeholder="수입 여부를 선택해주세요...">
          <Option value="true">수입</Option>
          <Option value="false">지출</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="type"
        label="종류"
        rules={[
          {
            required: true,
            message: '종류는 필수값입니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="amount"
        label="금액"
        rules={[
          {
            required: true,
            message: '금액은 필수값입니다',
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
        name="insertedAt"
        label="입력 시점"
        rules={[
          {
            required: true,
            message: '입력 시점은 필수값입니다.',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FundAddOrChangeForm;
