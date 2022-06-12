import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Form, InputNumber, Input, message } from 'antd';

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
  mutation createStock($newStock: CreateStockInput!) {
    createStock(input: $newStock) {
      ok
      error
    }
  }
`;

const StockAddOrChangeForm = ({ onClose, values }) => {
  const [form] = Form.useForm();
  const [createStock, { loading, error }] = useMutation(NEW_STOCK, {
    onCompleted: () => {
      message.success('등록 성공');
    },
    onError: (error) => {
      message.error(error);
    },
  });

  useEffect(() => {
    form.setFieldsValue({
      ...values,
    });
  }, [values]);

  /* eslint-disable */
  const onFinish = (values) => {
		console.log(values)
    createStock({ variables: { "newStock": values } });
    //form.resetFields();
    //onClose();
  };

  const onFinishFailed = (values) => {
    console.log(JSON.stringify(values));
    message.error("등록에 실패하였습니다: " + JSON.stringify(values));
    onClose();
  }

	if (loading) return 'submitting...';
  if (error) return error.message;

  return (
    <Form {...formItemLayout} form={form} name="stock" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large" scrollToFirstError>
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

      {/*<Form.Item
        name="location"
        label="위치"
      >
        <Radio.Group defaultValue="Warehouse">
          <Radio value="Warehouse">창고</Radio>
          <Radio value="Stand">매대</Radio>
        </Radio.Group>
      </Form.Item>*/}
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
        <Input
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StockAddOrChangeForm;
