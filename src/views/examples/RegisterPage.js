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
                <h3 className="title mx-auto"><b>Create your NFT</b></h3>

                <Form className="register-form">
                  <label><h6>NFT Name *</h6></label>
                  <Input placeholder="Enter your NFT name here" type="text" />
                  <label><h6>URL *</h6></label>
                  <Input placeholder="Enter your NFT url here" type="text" />
                  <label><h6>Starting Price *</h6></label>
                  <Input placeholder="Enter starting price" type="number" />
                  <label><h6>Pick Date *</h6></label>
                  <div color='danger'>
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
                    <label><h6>Description</h6></label>
                  <Input placeholder="(optional)" type="text" />
                  <center>
                    <Button className="btn-round" color="danger" href="/register-page">
                      Create
                    </Button>
                  </center>

                  </div>
                </Form>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-profile">
                <h3 className="title mx-auto"><b>Browse existing NFT's</b></h3>
              
              <Row>
              <Col>
              <div class="col-sm-6 col-md-10" >
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"
                  onClick={toggleModal}
                  />
                  <Modal isOpen={modal} toggle={toggleModal}>
                    {/* MODAL ZA PRVU SLIKU */}
                    <div className="modal-header">
                      <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={toggleModal}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                      <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                      >
                        Picture Name
                      </h5>
                    </div>
                    <div className="modal-body">
                        <img 
                      alt="..." 
                      class="img-rounded img-responsive" 
                      src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"
                      />
                    </div>
                    <div className="modal-footer">
                      <div className="left-side">
                        <Button
                          className="btn-link"
                          color="default"
                          type="button"
                        >
                          Current NFT Value: 0.015 ETH
                        </Button>
                      </div>
                      <div className="divider" />
                      <div className="right-side">
                        <Button className="btn-link" color="danger" type="button">
                          Bid:
                        <Input placeholder="Enter starting price" type="number" />
                        </Button>
                      </div>
                    </div>
                  </Modal>
                  
                  <p className="text-center"><b>Current Value: 0.015 ETH</b></p>
              </div>
              </Col>
              
              <Col>
              <div class="col-sm-6 col-md-10">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>
                  <p className="text-center"><b>Current Value: 1.400 ETH</b></p>
              </div> 
              </Col>

              <Col>            
              <div class="col-sm-6 col-md-10">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>
                  <p className="text-center"><b>Current Value: 0.523 ETH</b></p>
              </div>
              </Col> 
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
