import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import moment from 'moment';
import { Button, Form, InputNumber, message } from 'antd';

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

const NEW_STOCK = gql`
  mutation {
    createStock($newStock: NewStockInput!) {
	  stock(input: $newStock) {
		location
		amount
		productId
	  }
	{
      ok
    }
  }
`;
const StockAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();
  const [createStock, newStock] = useMutation(NEW_STOCK);
  if (newStock.loading) {
    console.log('loading');
  }

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
    createStock({
		variables: { newStock: values },
	});
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
        name="name"
        label="물품 이름"
      >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
      </Form.Item>

      <Form.Item
        name="stand"
        label="매대 개수"
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
        name="warehouse"
        label="창고 개수"
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StockAddOrChangeForm;
