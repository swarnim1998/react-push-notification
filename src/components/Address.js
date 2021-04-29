import React from 'react'
import {Col, Container, Row, } from 'reactstrap'
export default function Address() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                  <h4>Collection from:</h4>
                  <p className="mt-0 mb-0">Zoya</p>
                  <p className="mt-0 mb-0">133 Gandhi Nagar</p>
                  <p>New york tower</p>
                </Col>
            </Row>
        </Container>
    )
}
