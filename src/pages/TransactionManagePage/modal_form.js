import React, { useEffect } from 'react';
import { Button, Form, InputNumber, message, Select } from 'antd';
import { useMutation } from '@apollo/client';
import { NEW_TX } from './graphql';

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

const TransactionAddOrChangeForm = ({ onClose, values, refetch }) => {
  const [form] = Form.useForm();
  const [createTransaction, { loading }] = useMutation(NEW_TX, {
    onCompleted: refetch,
  });

  useEffect(() => {
    form.setFieldsValue({
      ...values,
      isRefund: values.isRefund ? 'true' : 'false',
    });
  }, [values]);

  const onFinish = (values) => {
    console.log('onFinish:', values);
    const newTransaction = {
      transactionProducts: {
        amount: values.amount,
        productId: values.productId,
      },
      paymentType: values.paymentType,
      customerId: values.customerId,
      isRefund: values.isRefund === 'true' ? true : false,
    };
    createTransaction({ variables: { newTransaction } }).then((result) => {
      const { ok, error } = result.data.createTransaction;
      if (ok) {
        message.success('등록에 성공했습니다.');
        form.resetFields();
        onClose();
      } else {
        message.error('등록에 실패하였습니다: ' + error);
      }
    });
  };

  const onFinishFailed = (values) => {
    console.log('onFinishFailed:', JSON.stringify(values));
    message.error('잘못된 입력입니다: ' + JSON.stringify(values));
  };

  if (loading) return <span>로딩 중입니다...</span>;

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="worker"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      scrollToFirstError
    >
      <Form.Item
        name="productId"
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
        label="물품 개수"
        rules={[
          {
            required: true,
            message: '물품 개수는 필수값입니다.',
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
        name="customerId"
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
        name="paymentType"
        label="결제 방식"
        rules={[
          {
            required: true,
            message: '결제 방식은 필수값입니다.',
          },
        ]}
      >
        <Select placeholder="결제 방식을 선택해주세요...">
          <Option value="Card">카드</Option>
          <Option value="Cash">현금</Option>
        </Select>
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
        <Select placeholder="판매/환불을 선택해주세요...">
          <Option value="false">판매</Option>
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
