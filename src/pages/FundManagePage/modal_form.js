import React, { useEffect } from 'react';
import { Button, Form, InputNumber, message, Select } from 'antd';
import { useMutation } from '@apollo/client';
import { NEW_FUND } from './graphql';

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
  const [createFund, { loading }] = useMutation(NEW_FUND);

  useEffect(() => {
    form.setFieldsValue(values);
  }, [values]);

  const onFinish = (values) => {
    console.log('onFinish:', values);
    createFund({
      variables: {
        newFund: {
          ...values,
          // boolean 타입으로 보내야 함.
          isIncome: values.isIncome === 'true' ? true : false,
        },
      },
    }).then((result) => {
      const { ok, error } = result.data.createFund;
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
        <Select placeholder="종류를 선택해주세요...">
          <Option value="Return">반품</Option>
          <Option value="Order">발주</Option>
          <Option value="Sale">판매</Option>
          <Option value="Refund">환불</Option>
          <Option value="Salary">급여</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="price"
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FundAddOrChangeForm;
