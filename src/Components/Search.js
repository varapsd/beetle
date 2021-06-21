import React, { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap';
import Home from './Home';

function Search(props){
    var pin = 0
    function changePin(){
        console.log(pin);
        props.search(pin);
    }
    return(
        <div className="container">
            <Form>
                <Form.Group as={Row} controlId="formPlaintextName">
                    <Form.Label column sm="1">
                    Name
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="text" placeholder="Name" />
                    </Col>

                    <Form.Label column sm="1">
                    Phone
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number" required placeholder="Phone"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="1">
                    Email
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="email" required placeholder="email" />
                    </Col>

                    <Form.Label column sm="1">
                    Pincode
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number" required placeholder="Pincode" onChange={evt => pin = evt.target.value} />
                    </Col>
                </Form.Group>
                
                <Button className="right" onClick={changePin}>Submit</Button>
            </Form>
            <hr />
        </div>
    )
}

export default Search;