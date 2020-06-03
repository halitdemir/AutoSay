import React from 'react';
import { Accordion, Card, Form, Row, Col, Image, Button, Container, Nav } from 'react-bootstrap';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'

function OrderGenerator() {
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
                        <p><h5>Motor :</h5> 5.5</p>
                        <p><h5>Renk :</h5> Kırmızı</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <span>&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;</span>
            <GeneratorForm json={Images}/>
            <span>&nbsp;&nbsp;</span>
            <Container>
                <Row>
                    <Col sm></Col>
                    <Col sm>
                        <Nav.Link href="/order">
                            <Button variant="secondary">Siparişi Tamamla</Button>
                        </Nav.Link>
                    </Col>
                    <Col sm></Col>
                </Row>
            </Container>
        </div>
    );
}

function GeneratorForm(props){
    return(
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
                    {Object.keys(props.json.color).map(key => 
                            (           
                                <Col sm={1}>
                                    <span>&nbsp;&nbsp;</span>
                                    <Form.Check
                                    type="radio"
                                    label={       
                                        <div className="colorDiv">
                                            <Image 
                                                className="d-block w-100"
                                                src={props.json.color[key].src}
                                                alt={props.json.color[key].alt}
                                                fluid
                                            />
                                        </div>           
                                    }
                                    name="colorRadios"
                                    id={`colorRadios${props.json.color[key].src}`}
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
                    {Object.keys(props.json.rim).map(key => 
                            (           
                                <Col sm={1}>
                                    <span>&nbsp;&nbsp;</span>
                                    <Form.Check
                                    type="radio"
                                    label={       
                                        <div className="colorDiv">
                                            <Image 
                                                className="d-block w-100"
                                                src={props.json.rim[key].src}
                                                alt={props.json.rim[key].alt}
                                                fluid
                                            />
                                        </div>           
                                    }
                                    name="rimRadios"
                                    id={`rimRadios${props.json.rim[key].src}`}
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
                    {Object.keys(props.json.upholstery).map(key => 
                            (           
                                <Col sm={1}>
                                    <span>&nbsp;&nbsp;</span>
                                    <Form.Check
                                    type="radio"
                                    label={       
                                        <div className="colorDiv">
                                            <Image 
                                                className="d-block w-100"
                                                src={props.json.upholstery[key].src}
                                                alt={props.json.upholstery[key].alt}
                                                fluid
                                            />
                                        </div>           
                                    }
                                    name="upholsteryRadios"
                                    id={`upholsteryRadios${props.json.upholstery[key].src}`}
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
                        type="radio"
                        label={"Çarpışma öncesi hazırlık sistemi"}
                        name="optionRadios"
                        id="optionRadios2"
                        />
                        <span>&nbsp;</span>
                        <Form.Check
                        type="radio"
                        label={"Ön sis farları ve entegre statik dönüş farları"}
                        name="optionRadios"
                        id="optionRadios3"
                        />
                        <span>&nbsp;</span>
                        <Form.Check
                        type="radio"
                        label={"Elektrikli katlanabilir yan aynalar"}
                        name="optionRadios"
                        id="optionRadios4"
                        />
                        <span>&nbsp;</span>
                        <Form.Check
                        type="radio"
                        label={"Yaya algılama sistemi"}
                        name="optionRadios"
                        id="optionRadios5"
                        />
                        <span>&nbsp;</span>
                        <Form.Check
                        type="radio"
                        label={"Front assist ve şehir içi acil fren asistanı"}
                        name="optionRadios"
                        id="optionRadios6"
                        />
                    </Col>
                </Form.Group>
            </fieldset>
        </Form>
    );
}
  
export default OrderGenerator;