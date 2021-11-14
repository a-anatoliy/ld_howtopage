import React from 'react';
import { Container, Row, Col, Nav } from 'bootstrap-4-react';
import './css/bootstrap.css';
import './css/font-awesome.css';


function App() {
  return (
      <Container>
        <Row className="menu-border myhdr">
          <Col>
              <Nav className="navbar-expand-lg navbar-light font-weight-bold navbar-expand-md">
                  <img src="/i/goldLeftLogo.png" alt="LD logo"/>&nbsp;
                  <Nav.Item><Nav.Link className="main-nav ml-2 mr-2 page-scroll" active href="#sketch">Sketch</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="main-nav page-scroll" href="#customOrder">Custom Order</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="main-nav page-scroll" href="#Measurements">Measurements</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="main-nav page-scroll" href="#Payments">Payments</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="main-nav page-scroll" href="#Contact">Contact</Nav.Link></Nav.Item>
              </Nav>
              <div className="col-md-2 d-none d-lg-block align-middle text-center text-sm-center align-self-center">
                  <a title="Lucky DRESS EU Web Page"     target="_blank" href="https://www.lucky-dress.eu/"><i className="fa fa-globe" aria-hidden="true"/></a>
                  <a title="Lucky DRESS EU on Etsy"      target="_blank" href="https://www.etsy.com/shop/AtelierLuckyDress"><i className="fa fa-etsy pl-1" aria-hidden="true"/></a>
                  <a title="Lucky DRESS EU on Facebook"  target="_blank" href="https://www.facebook.com/luckydresskrakow/"><i className="fa fa-facebook pl-1" aria-hidden="true"/></a>
                  <a title="Lucky DRESS EU on Instagram" target="_blank" href="https://www.instagram.com/lucky_dress_atelier"><i className="fa fa-instagram pl-1" aria-hidden="true"/></a>
                  <a title="Lucky DRESS EU on Pinterest" target="_blank" href="https://www.pinterest.com/ldressatelier/"><i className="fa fa-pinterest-p pl-1" aria-hidden="true"/></a>
              </div>
              <div className="col-md-3 col-5 align-middle text-center align-self-center">
                  <div className="main-logo fancy">LUCKY DRESS</div>
              </div>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
