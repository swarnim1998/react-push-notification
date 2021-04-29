import React from 'react'
import logo from '../Assets/Component 5 – 69/Component 5 – 69.png'
import { Alert, ListGroup, ListGroupItem } from 'reactstrap'
import {Row, Col, Container} from 'reactstrap'
import ItemPhoto from './ItemPhoto'
import OrderDetails from './OrderDetails'
import OrderStepper from './OrderStepper'
import Address from './Address'
export default function Orders() {
    return (
        <div style={{overflowX: "hidden", paddingBottom: "50px"}}>
            <Alert color="white">
              <img src={logo} style={{width: "200px"}}/>
            </Alert>
            <Container fluid="true">
                <Row>
                    <Col sm="3" className="d-flex flex-column justify-content-start align-items-center" style={{ fontSize: "large    "}}>
                       <ListGroup>
                       <Alert  color="white">Account</Alert>
                       <Alert  color="white">Orders</Alert>
                       <Alert  color="white">Cards</Alert>
                       </ListGroup>
                    </Col>
                    <Col sm="9" >
                        <header className="font-weight-bold" style={{fontSize: "2em"}}>
                            Orders
                        </header>
                        <OrderStepper/>
                        <ItemPhoto/>
                        <OrderDetails/>
                        <Address/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
