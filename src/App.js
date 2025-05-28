import React from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Header from "./components/header.jsx";
import Router from './router/Router.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/change-password';
  
  return (
    <>
      {!isLoginPage && <Header />}
      <Router />
    </>
  );
}

export default App;
