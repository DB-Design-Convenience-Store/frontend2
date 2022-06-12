import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, Form, Input, InputNumber, message } from 'antd';

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

const ReceivingAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();
  const today = new Date().toISOString().slice(0, 10);

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
        label="입고 번호"
        rules={[
          {
            required: true,
            message: '입고 번호는 필수값입니다.',
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
        name="product_id"
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
        name="date"
        label="입고일자"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input
	    disabled
        style={{
          width: '100%',
        }}
		defaultValue={today}
      />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReceivingAddOrChangeForm;
