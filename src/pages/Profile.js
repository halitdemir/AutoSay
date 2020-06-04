import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

function Profile() {
    return(
        <>
            <span>&nbsp;&nbsp;</span>
            <h2>Profil</h2>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image 
                            className="d-block w-100"
                            src={require('../assets/images/profile.jpg')}
                            alt={"profile_photo"}
                            roundedCircle 
                        />
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                        <h5>Kimlik Bilgileri :</h5>
                        <p> <b> İsim  : </b> Halit </p>
                        <p> <b> Soyisim  : </b> Demir </p>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                        <h5>İletişim Bilgileri :</h5>
                        <p> <b>E-posta  :</b> h.demir@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
  
export default Profile;
