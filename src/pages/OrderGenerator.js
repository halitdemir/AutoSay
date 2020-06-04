import React, { Component } from "react";
import { Accordion, Card, Form, Row, Col, Image, Button, Container, Nav } from 'react-bootstrap';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'
import { NavLink } from 'react-router-dom';

class OrderGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engine: [false, false, false],
            color: "",
            rim: "",
            upholstery: "",
            collision: false,
            FFandISTLights: false,
            EFSMirrors: false,
            pedestrianDetection: false,
            frontAsist: false,
        };
    }

    render() {
        return (
            <div className="mainDiv">
                <span>&nbsp;&nbsp;</span>
                <h2>Sipariş</h2>
                <p>Bişeler Bişeler</p>
                <ImageSlide json={Images.order.generalSlide} name="generalSlide"/>
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
                <Form>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Motor Seçenekleri
                            </Form.Label>
                            <Col sm={3}>
                                <Form.Check
                                    type="radio"
                                    label="1.0         95ps(70 kW)           5 İleri Vites"
                                    name="engineRadios"
                                    id="engineRadios1"
                                />
                                <span>&nbsp;&nbsp;</span>
                                <Form.Check
                                    type="radio"
                                    label="1.5         95ps(70 kW)           7 İleri Vites"
                                    name="engineRadios"
                                    id="engineRadios2"
                                />
                                <span>&nbsp;&nbsp;</span>
                                <Form.Check
                                    type="radio"
                                    label="1.6         115ps(85 kW)         7 İleri Vites"
                                    name="engineRadios"
                                    id="engineRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Renk Seçenekleri
                            </Form.Label>
                            {Object.keys(Images.color).map(key => 
                                    (           
                                        <Col sm={1}>
                                            <span>&nbsp;&nbsp;</span>
                                            <Form.Check
                                            type="radio"
                                            label={       
                                                <div className="colorDiv">
                                                    <Image 
                                                        className="d-block w-100"
                                                        src={Images.color[key].src}
                                                        alt={Images.color[key].alt}
                                                        fluid
                                                    />
                                                </div>           
                                            }
                                            name="colorRadios"
                                            id={`colorRadios${Images.color[key].src}`}
                                            />
                                        </Col>
                                    )
                                )
                            }
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Jant Seçenekleri
                            </Form.Label>
                            {Object.keys(Images.rim).map(key => 
                                    (           
                                        <Col sm={1}>
                                            <span>&nbsp;&nbsp;</span>
                                            <Form.Check
                                            type="radio"
                                            label={       
                                                <div className="colorDiv">
                                                    <Image 
                                                        className="d-block w-100"
                                                        src={Images.rim[key].src}
                                                        alt={Images.rim[key].alt}
                                                        fluid
                                                    />
                                                </div>           
                                            }
                                            name="rimRadios"
                                            id={`rimRadios${Images.rim[key].src}`}
                                            />
                                        </Col>
                                    )
                                )
                            }
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Döşeme Seçenekleri
                            </Form.Label>
                            {Object.keys(Images.upholstery).map(key => 
                                    (           
                                        <Col sm={1}>
                                            <span>&nbsp;&nbsp;</span>
                                            <Form.Check
                                            type="radio"
                                            label={       
                                                <div className="colorDiv">
                                                    <Image 
                                                        className="d-block w-100"
                                                        src={Images.upholstery[key].src}
                                                        alt={Images.upholstery[key].alt}
                                                        fluid
                                                    />
                                                </div>           
                                            }
                                            name="upholsteryRadios"
                                            id={`upholsteryRadios${Images.upholstery[key].src}`}
                                            />
                                        </Col>
                                    )
                                )
                            }
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Eklenmek istenen diğer opsiyonlar :
                            </Form.Label>
                            <Col sm={5}>
                                <span>&nbsp;</span>
                                <Form.Check
                                    type="checkbox"
                                    label={"Çarpışma öncesi hazırlık sistemi"}
                                    name="optionRadios"
                                    id="optionRadios1"
                                />
                                <span>&nbsp;</span>
                                <Form.Check
                                    type="checkbox"
                                    label={"Ön sis farları ve entegre statik dönüş farları"}
                                    name="optionRadios"
                                    id="optionRadios2"
                                />
                                <span>&nbsp;</span>
                                <Form.Check
                                    type="checkbox"
                                    label={"Elektrikli katlanabilir yan aynalar"}
                                    name="optionRadios"
                                    id="optionRadios3"
                                />
                                <span>&nbsp;</span>
                                <Form.Check
                                    type="checkbox"
                                    label={"Yaya algılama sistemi"}
                                    name="optionRadios"
                                    id="optionRadios4"
                                />
                                <span>&nbsp;</span>
                                <Form.Check
                                    type="checkbox"
                                    label={"Front assist ve şehir içi acil fren asistanı"}
                                    name="optionRadios"
                                    id="optionRadios5"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                </Form>
                <span>&nbsp;&nbsp;</span>
                <Container>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <NavLink to="/order">
                                <Button variant="secondary">Siparişi Tamamla</Button>
                            </NavLink>
                        </Col>
                        <Col sm></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default OrderGenerator;