import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import OrderGenerator from '../pages/OrderGenerator';

const protectedRoutes = {
    header :[
        { name: "Ana Sayfa", path: "/home", exact: true, main: props => <Home {...props} />, public: false,},
        { name: "Hakkında", path: "/about", exact: true, main: props => <About {...props} />, public: false, },
        { name: "Profil", path: "/profile", exact: true, main: props => <Profile {...props} />, public: false, },
        { name: "Sipariş", path: "/order", exact: true, main: props => <Order {...props} />, public: false, },
        { name: "İletişim", path: "/contact", exact: true, main: props => <Contact {...props} />, public: false, },
    ],
    pages :[
        { name: "Ana Sayfa", path: "/home", exact: true, main: props => <Home {...props} />, public: false, },
        { name: "Hakkında", path: "/about", exact: true, main: props => <About {...props} />, public: false, },
        { name: "Profil", path: "/profile", exact: true, main: props => <Profile {...props} />, public: false, },
        { name: "Sipariş", path: "/order", exact: true, main: props => <Order {...props} />, public: false, },
        { name: "İletişim", path: "/contact", exact: true, main: props => <Contact {...props} />, public: false, },
        { name: "OrderGenerator", path: "/order_generator", exact: true, main: props => <OrderGenerator {...props} />, public: false, }
    ]
};

export default protectedRoutes;