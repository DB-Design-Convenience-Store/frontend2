import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, Form, Input, InputNumber, message, Select } from 'antd';
import { useMutation } from '@apollo/client';
import { NEW_RETURN } from './graphql';

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

const ReturnAddOrChangeForm = ({ onClose, values, refetch }) => {
  const [form] = Form.useForm();
  const [createReturn, { loading }] = useMutation(NEW_RETURN, {
    onCompleted: refetch,
  });

  useEffect(() => {
    form.setFieldsValue({
      ...values,

      isRefund: values.isRefund ? 'true' : 'false',

      // date picker는 moment를 써줘야 함 (antd)
      createdAt: !values.createdAt ? '' : moment(values.createdAt),
    });
  }, [values]);

  const onFinish = (values) => {
    console.log('onFinish:', values);
    createReturn({ variables: { newReturn: values } }).then((result) => {
      const { ok, error } = result.data.createReturn;
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
        name="reason"
        label="반품 사유"
        rules={[
          {
            required: true,
            message: '반품 사유는 필수값입니다.',
          },
        ]}
      >
        <Input />
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
        name="location"
        label="위치"
        rules={[
          {
            required: true,
            message: '위치는 필수값입니다.',
          },
        ]}
      >
        <Select placeholder="위치를 선택해주세요...">
          <Option value="Warehouse">창고</Option>
          <Option value="Stand">매대</Option>
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

export default ReturnAddOrChangeForm;
