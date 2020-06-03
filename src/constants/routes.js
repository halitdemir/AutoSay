import React from "react";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import OrderGenerator from '../pages/OrderGenerator';

const routes = {
    header :[
        { name: "Kayıt", path: "/join", exact: true, main: () => <Join /> },
        { name: "Giriş", path: "/", exact: true, main: () => <Login /> },
    ],
    pages :[
        { name: "Kayıt", path: "/join", exact: true, main: () => <Join /> },
        { name: "Giriş", path: "/", exact: true, main: () => <Login /> },
    ]
};

export default routes;