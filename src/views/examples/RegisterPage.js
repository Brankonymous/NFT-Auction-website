import React from "react";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
} from "reactstrap";

import ReactDatetime from "react-datetime";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage(){
  document.documentElement.classList.remove("nav-open");
  
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Create your NFT</h3>

                <Form className="register-form">
                  <label>NFT Name *</label>
                  <Input placeholder="Enter your NFT name here" type="text" />
                  <label>URL *</label>
                  <Input placeholder="Enter your NFT url here" type="text" />
                  <label>Starting price *</label>
                  <Input placeholder="Enter your NFT url here" type="number" />
                  <label>Pick date *</label>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Datetime Picker",
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  <label>Description</label>
                  <Input placeholder="(optional)" type="text" />
                  <center>
                    <Button className="btn-round" color="danger" href="/register-page">
                      Register
                    </Button>
                  </center>
                </Form>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-profile">
                <h3 className="title mx-auto">Browse existing NFT's</h3>
              
              <Row>
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>

              </div>
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>

              </div>              
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>

              </div>
              </Row>
              <Row>
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"
                />

              </div>
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>

              </div>              
              <div class="col-sm-6 col-md-4">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>

              </div>
              </Row>
              
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Dogecoin crew
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
