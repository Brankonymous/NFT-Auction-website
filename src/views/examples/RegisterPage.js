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
  const[link,setLink] = React.useState("");
  const[naziv,setNaziv] = React.useState("");
  const[pocetna,Setpocetna] = React.useState(0);
  const[opis,Setopis] = React.useState("");
  const[stanje,SetStanje] = React.useState(false);
  const[niza,SetNiza] = React.useState([]);
let niz=[];
let pret=0;
let sad=1;
let words = [];
const[i,SetI]=React.useState(0);
 const onpres=()=>
 {
   sad+=1;
   if(pret==sad)
   { 
     sad+=1;
   console.log("desilo se")
   if(link!==""&&naziv!=="")
   { 
     console.log("sssss")
     words.pop();
     let a={ime:naziv,prezime:i}
     words.push(a);
     console.log(niza)
     SetNiza([...niza,{ime:naziv,prezime:pocetna}])
   niz.push({naziv:naziv,link:link,pocetna:pocetna,opis:opis,id:i});
   
   SetI(i+1);

   }
   else
   {
     console.log("error");
     console.log(niz);
   
  }
}
  
 }
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
            "url(" + require("assets/img/header.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container style={{backgroundColor:'black',borderRadius:10,height:'160vh',overflowY:'scroll'}}>
          <Row  style={{flexDirection:'row'}}>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto"><b>Create your NFT</b></h3>

                <Form className="register-form">
                  <label><h6>NFT Name *</h6></label>
                  <Input onChange={(value)=>{setNaziv(value)}} placeholder="Enter your NFT name here" type="text" />
                  <label><h6>URL *</h6></label>
                  <Input onChange={(value)=>{setLink(value)}} placeholder="Enter your NFT url here" type="text" />
                  <label><h6>Starting Price *</h6></label>
                  <Input onChange={(value)=>{Setpocetna(value)}} placeholder="Enter starting price" type="number" />
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
                  <Input  onChange={(value)=>{Setopis(value)}} placeholder="(optional)" type="text" />
                  <center>
                    <Button disabled={(link!==""&&naziv!=="")?false:true} onClick={()=>{onpres()}} className="btn-round" color="danger" href="/register-page">
                      Create
                    </Button>
                  </center>

                  </div>
                </Form>
              </Card>
            </Col>
            <Col  className="ml-auto mr-auto" lg="8">
              <Card  className="card-profile" style={{ backgroundColor:'#f5f5f5',flexDirection:'column',marginBottom:100,height:1000,overflowY:'scroll',justifyContent:'center',alignItems:'center',paddingLeft:100 }}>
                <h3 className="title mx-auto" style={{marginRight:100}}><b>Browse existing NFT's</b></h3>
                <ul>
                
                    <div class="col-sm-6 col-md-10">
                <img 
                  alt="..." 
                  class="img-rounded img-responsive" 
                  src="/paper-kit-react/static/media/uriel-soberanes.b741f54e.jpg"/>
                  <p className="text-center"><b>Current Value: 1.400 ETH</b></p>
              </div>
               

 
 </ul>
             
              
              
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6 style={{color:'black'}}>
            {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" style={{color:'red'}} /> by Dogecoin crew
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
