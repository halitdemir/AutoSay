import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

function Profile() {
    return(
        <>
            <span>&nbsp;&nbsp;</span>
            <h2>Profile</h2>
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
                        <h5>İsim  :</h5>
                        <p>Halit </p>
                        <h5>Soyisim :</h5>
                        <p>Demir</p>
                        <h5>E-Posta :</h5>
                        <p>h.demir@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
  
export default Profile;
