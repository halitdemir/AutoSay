import React, { Component } from "react";
import MapContainer from '../components/MapContainer'
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
const divStyle = {
    height: '500px',
  };
class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            lastName: "",
            email: "",
            textAreaValue: "",
        };
        this.handleName = this.handleName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEMail = this.handleEMail.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.mailButton = this.mailButton.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    handleEMail(event) {
        this.setState({ email: event.target.value });
    }

    handleTextArea(event) {
        this.setState({ textAreaValue: event.target.value });
    }

    mailButton(event){
        window.location.href = `mailto:oofkadho@gmail.com?subject=Öneri/Sorun/İstek!&body=mesaj:%0D%0A%0D%0A${this.state.textAreaValue}%0D%0A%0D%0Aisim/soyisim:  ${this.state.name} ${this.state.lastName}%0D%0A%0D%0Aeposta:  ${this.state.email}%0D%0A`;
    }

    render() {
        return(
            <>
                <span>&nbsp;&nbsp;</span>
                <h2>İletişim</h2>
                <span>&nbsp;&nbsp;</span>
                <Container>
                    <Row>
                        <Col>
                            <div style={divStyle}>
                                <MapContainer/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Adınız :</Form.Label>
                                        <Form.Control 
                                            placeholder="İsim" 
                                            value={this.state.name} 
                                            onChange={this.handleName}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Soyadınız :</Form.Label>
                                        <Form.Control 
                                            placeholder="Soyisim" 
                                            value={this.state.lastName} 
                                            onChange={this.handleLastName}
                                        />
                                    </Col>
                                </Row>
                                <span>&nbsp;&nbsp;</span>
                                <span>&nbsp;&nbsp;</span>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>E-posta :</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                placeholder="E-posta giriniz"                                                 
                                                value={this.state.email} 
                                                onChange={this.handleEMail}
                                            />
                                            <Form.Text className="text-muted">
                                                E-postanız hiçbir şekilde 3.şahıslarla paylaşılmaz.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Mesajınız :</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows="6" 
                                                value={this.state.textAreaValue} 
                                                onChange={this.handleTextArea}
                                            />
                                        </Form.Group>                                
                                    </Col>
                                </Row>
                                <span>&nbsp;&nbsp;</span>
                                <span>&nbsp;&nbsp;</span>
                                <Row>
                                    <Col md={{ span: 2 }}>
                                        <Nav.Link>
                                            <Button variant="secondary" type="submit"  onClick={() => {this.mailButton()}}>
                                                Mesajı İlet              
                                            </Button>
                                        </Nav.Link>
                                    </Col>
                                    <Col md={{ span: 4, offset: 2 }}></Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Contact;