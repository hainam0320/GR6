import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return  (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>THÔNG TIN CÔNG TY</h5>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>HỖ TRỢ KHÁCH HÀNG</h5>
            <ul>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Hướng dẫn thanh toán</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
            <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2024 Exclusive. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <ul className="footer-links">
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Điều khoản và điều kiện</a></li>
                <li><a href="#">Chính sách cookie</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer