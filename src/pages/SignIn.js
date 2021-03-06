import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Row, Col, Typography, Form, Input, Switch, message } from 'antd';
import signinbg from '@assets/images/img-signin.jpg';
import { Link } from 'react-router-dom';
import { UserContext } from '../store/UserContext';
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Content } = Layout;

const SignIn = () => {
  const history = useHistory();

  const { login } = useContext(UserContext);

  const onFinish = () => {
    login();
    message.success('로그인에 성공하였습니다.');
    history.push('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {
    message.error('로그인에 실패하였습니다:' + errorInfo);
  };

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-col header-brand">
            <h5>
              <Link to="/dashboard">UOS25</Link>
            </h5>
          </div>
          <div className="header-col header-nav"></div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
              <Title className="mb-15">UOS25 로그인</Title>
              <Title className="font-regular text-muted" level={5}>
                이메일과 비밀번호를 입력해 로그인합니다.
              </Title>
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="row-col">
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input placeholder="Email" type="email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input placeholder="Password" type="password" />
                </Form.Item>

                <Form.Item name="remember" className="aligin-center" valuePropName="checked">
                  <Switch defaultChecked onChange={onChange} />
                  자동 로그인
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    로그인
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">아이디가 없으면 점장님께 문의하세요.</p>
              </Form>
            </Col>
            <Col className="sign-img" style={{ padding: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default SignIn;
