import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Img from "./images/1.jpeg";
import Img1 from "./images/2.jpeg";
import Img2 from "./images/3.jpeg";
export default function content() {
  return (
    <div className="home ">
    <Container>
      <Row>
        <div className="Head ">
          <img
            src={Img2}
            alt=""
            width="76px"
            height="25px"
            className="float-start"
          />
        </div>
      </Row>

      <Row className="gg">
        <h5 className="hh text-right ">Hi, username</h5>
      </Row>
      <Row>
        <Col>
          <div className="Text1 ">
            <img src={Img} alt="" className="mg" />
            <p className="t1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus eu mauris maximus, porttitor mi nec.
            </p>
            <button className="btn1 btn-primary  btn-Link">
              Open Online IDE
            </button>
          </div>
        </Col>
        <Col>
          <div className="Text2  ">
            <img src={Img1} alt="" className="mg1" />
            
              <p className="t2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus eu mauris maximus, porttitor mi nec.
              </p>

              <button className="btn2 btn-primary btn-Link">
                Start Practicing
              </button>
            
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
}
