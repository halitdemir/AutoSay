import React, { useState, useContext } from "react";import { AuthContext } from "../App";
import * as firebase from 'firebase'
import { withRouter } from 'react-router-dom';

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
      <h1>Join</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button type="submit">Register</button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default withRouter(Join);