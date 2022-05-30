import { Layout, Row, Col } from "antd";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2022 서울시립대학교 데이터베이스설계
            by
            <a href="#pablo" className="font-weight-bold" target="_blank">
              김성빈, 김지윤, 김수홍
            </a>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
