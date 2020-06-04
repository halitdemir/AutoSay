import React, { Component } from "react";
import { Accordion, Card, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'
import { NavLink } from 'react-router-dom';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            email: "",
            textAreaValue: "",
        };
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }
    
    render() {
        return (
            <>
                <span>&nbsp;&nbsp;</span>
                <h2>Sipariş</h2>
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
                            <p><b>Motor :</b> 1.0         95ps(70 kW)           5 İleri Vites</p>
                            <p><b>Renk :</b> Kırmızı</p>
                            <p><b>Jant :</b> EMR-DY459-02 9.0x19" 5x120 ET45 72.6 Silver 19 İnç Jant</p>
                            <p><b>Döşeme :</b> Siyah-sportif</p>
                            <p>
                                <b>Ekler :</b> 
                                <li>Çarpışma öncesi hazırlık sistemi</li>
                                <li>Ön sis farları ve entegre statik dönüş farları</li>
                                <li>Elektrikli katlanabilir yan aynalar</li>
                                <li>Yaya algılama sistemi</li>
                                <li>Front assist ve şehir içi acil fren asistanı</li>
                            </p>
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
                            <NavLink to="/order_generator">
                                <Button variant="secondary">Konfigürasyona Devam Et</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

function mailButton(){
    window.location.href = `mailto:oofkadho@gmail.com?subject=Sipariş!&body=
    istenen arabanın özellikleri: %0D%0A%0D%0A
    Motor : 1.0 95ps(70 kW) 5 İleri Vites%0D%0A
    Renk : Kırmızı%0D%0A
    Jant : EMR-DY459-02 9.0x19" 5x120 ET45 72.6 Silver 19 İnç Jant%0D%0A
    Döşeme : Siyah-sportif%0D%0A
    Ekler :%0D%0A
    *Çarpışma öncesi hazırlık sistemi%0D%0A
    *Ön sis farları ve entegre statik dönüş farları%0D%0A
    *Elektrikli katlanabilir yan aynalar%0D%0A
    *Yaya algılama sistemi%0D%0A
    *Front assist ve şehir içi acil fren asistanı%0D%0A%0D%0A
    Halit Demir%0D%0A
    h.demir@gmail.com%0D%0A%0D%0A`;
}

export default Order;
