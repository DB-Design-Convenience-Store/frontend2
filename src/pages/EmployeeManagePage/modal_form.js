import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, DatePicker, Form, Input, InputNumber, message, Select } from 'antd';
import { useMutation } from '@apollo/client';
import { NEW_EMPLOYEE } from './graphql';

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

const EmployeeAddOrChangeForm = ({ onClose, values, refetch }) => {
  const [form] = Form.useForm();
  const [createUser, { loading }] = useMutation(NEW_EMPLOYEE, {
    onCompleted: refetch,
  });

  useEffect(() => {
    form.setFieldsValue({
      ...values,
      // date picker는 moment를 써줘야 함 (antd)
      hiredDate: !values.hiredDate ? '' : moment(values.hiredDate),
      firedDate: !values.firedDate ? '' : moment(values.firedDate),
      payDate: !values.payDate ? '' : moment(values.payDate),
    });
  }, [values]);

  const onFinish = (values) => {
    console.log('onFinish:', values);
    createUser({ variables: { newUser: values } }).then((result) => {
      const { ok, error } = result.data.createUser;
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
        name="email"
        label="이메일"
        rules={[
          {
            required: true,
            message: '이메일은 필수값입니다.',
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: '비밀번호는 필수값입니다.',
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
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
          <Option value="Manager">매니저</Option>
          <Option value="PartTime">알바</Option>
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeAddOrChangeForm;
