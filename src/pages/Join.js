import React, { useState, useContext } from "react";import { AuthContext } from "../App";
import * as firebase from 'firebase'
import { withRouter } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';

const Join = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();

    firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res)
          history.push('/home')
          if (res.user) Auth.setLoggedIn(true);
        })
        .catch(e => {
          setErrors(e.message);
        });
      })

  };
  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form onSubmit={e => handleForm(e)}>
          
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="E-posta" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Şifre</Form.Label>
                  <Form.Control 
                  type="password" 
                  placeholder="Şifre" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
              </Form.Group>
            </Form.Row>
          </Form>

          <hr />
          <Button type="submit" variant="secondary">Kaydol</Button>
          <span>{error}</span>
        </form>
    </div>
  );
};

export default withRouter(Join);