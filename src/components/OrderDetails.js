import React from 'react'
import {Row, Col, Container, Alert} from 'reactstrap'
export default function OrderDetails() {
    return (
        
        <Container  style={{background: "#F9F9F9", width: "90%",  boxShadow: "0 0 5px 0px"}} className="mt-5 pb-5 ml-0">
            <Row>
               <Col>
                 <Alert style={{textAlign: "center", fontSize: "1.5em", fontWeight: "600"}} color="white"><span>Chef Id: </span>1234<span></span></Alert>
               </Col> 
            </Row>
            <div className="d-flex justify-content-between">
                <div  ><b><span>Order Number: </span></b><span>24-04-1998</span></div>
                <div  ><b><span>Date: </span></b><span>24-04-1998</span></div>
                <div  ><b><span>Time: </span></b><span>12pm</span></div>
            </div>
            <div className="seprator"/>
            <Row >
                <Col className="mt-1"><b><span>Order Type: </span></b><span>Rahul Sharma</span></Col>
            </Row>
            <div className="seprator"/>
            <div className="d-flex justify-content-around">
                <div  ><b><span>Sr No</span></b></div>
                <div  ><b><span>Item</span></b></div>
                <div  ><b><span>Chef Price</span></b></div>
                <div  ><b><span>Price</span></b></div>
            </div>
            <div className="seprator"/>
            <div className="d-flex justify-content-around">
                <div  ><span>1</span></div>
                <div  ><span>Pizza</span></div>
                <div  ><span>$0.08</span></div>
                <div  ><span>$0.08</span></div>
            </div>
            <div className="seprator mt-5"/>            
            <div className="d-flex justify-content-around">
                <div ></div>
                <div><span>Sub Total: </span></div>
                <div><span>$0.08</span></div>
                <div><span>$0.08</span></div>
            </div>
            <div className="seprator"/>            
            <div className="d-flex justify-content-around">
                <div ></div>
                <div><span>Delivery fee: </span></div>
                <div><span>$0.08</span></div>
                <div><span>$0.08</span></div>
            </div>
            <div className="seprator"/>            
            <div className="d-flex justify-content-around">
                <div ></div>
                <div><span>Total: </span></div>
                <div><span>$0.08</span></div>
                <div><span>$0.08</span></div>
            </div>
            <div className="seprator"/>            
            <div className="seprator mt-5"/>
            <div>
             <b>Note: </b>this is the note from customer
            </div>            
            <div className="seprator"/>            
   
        </Container>
    )
}
