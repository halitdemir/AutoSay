import React from 'react';
import { Accordion, Card, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'


function Order() {
    return (
        <>
            <span>&nbsp;&nbsp;</span>
            <h2>Sipariş</h2>
            <p>Bişeler Bişeler</p>
            <ImageSlide json={Images.order.generalSlide} name="generalSlide"/>
            <span>&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;</span>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Özellikler
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p><b>Motor :</b> 5.5</p>
                        <p><b>Renk :</b> Kırmızı</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>{' '}
            <span>&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;</span>
            <Container xl>
                <Row>
                    <Col md={{ span: 3}}>
                        <Nav.Link>
                            <Button variant="secondary" onClick={() => {mailButton()}}>Yetkililer İle İletişime Geç</Button>
                        </Nav.Link>
                    </Col>
                    <Col md={{ span: 3, offset: 6 }}>
                        <Nav.Link href="/order_generator">
                            <Button variant="secondary">Konfigürasyona Devam Et</Button>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
            
            
        </>
    );
}

function mailButton(){
    window.location.href = `mailto:oofkadho@gmail.com?subject=Sipariş!&body=istenen arabanın özellikleri:.`;
}

export default Order;
