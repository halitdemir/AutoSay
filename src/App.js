import React, { useState, useEffect } from "react";
import './App.css';
import HeaderComponent from './components/Header';
import AppRouter from './constants/Router';
import * as firebase from 'firebase';
import firebaseConfig from "./constants/firebase.config";
import { BrowserRouter as Router } from "react-router-dom";

document.body.style = 'background: #F6F6F6;';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
		if (user) setLoggedIn(true)
  }
  useEffect(() => {
    readSession()
  }, [])
  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <Router>
          <HeaderComponent isLoggedIn={isLoggedIn}/>
          <div className="App">
            <AppRouter isLoggedIn={isLoggedIn}/>
          </div>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;