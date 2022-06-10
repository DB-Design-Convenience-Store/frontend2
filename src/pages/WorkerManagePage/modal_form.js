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

const AddOrChangeManagerForm = ({ onClose, values }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...values,
      // date picker는 moment를 써줘야 함 (antd)
      hiredDate: !values.hiredDate ? '' : moment(values.hiredDate),
      firedDate: !values.firedDate ? '' : moment(values.firedDate),
      payDate: !values.payDate ? '' : moment(values.payDate),
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
        name="name"
        label="이름"
        rules={[
          {
            required: true,
            message: '이름은 필수값입니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="역할"
        rules={[
          {
            required: true,
            message: '역할은 필수값입니다.',
          },
        ]}
      >
        <Select placeholder="역할을 선택해주세요...">
          <Option value="manager">매니저</Option>
          <Option value="parttime">알바</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="dayWorkTime"
        label="주간근무시간"
        rules={[
          {
            required: true,
            message: '주간근무시간은 필수값입니다.',
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
        name="nightWorkTime"
        label="야간근무시간"
        rules={[
          {
            required: true,
            message: '야간근무시간은 필수값입니다',
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
        name="salary"
        label="급여"
        rules={[
          {
            required: true,
            message: '급여는 필수값입니다',
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
        name="hiredDate"
        label="고용일자"
        rules={[
          {
            required: true,
            message: '고용일자는 필수값입니다.',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="firedDate"
        label="해고일자"
        rules={[
          {
            required: true,
            message: '해고일자는 필수값입니다.',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="payDate"
        label="급여지급일자"
        rules={[
          {
            required: true,
            message: '급여지급일자는 필수값입니다.',
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

export default AddOrChangeManagerForm;
