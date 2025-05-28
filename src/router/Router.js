import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/Transition.jsx";
import ServicesPage from "../components/servicesPage.jsx";
import LoginPage from "../components/loginPage.jsx";
import ChangePasswordPage from "../components/changePasswordPage.jsx";
import ProductPage from "../components/productPage.jsx";
import OrderPage from "../components/orderPage.jsx";
import HomePage from "../components/homePage.jsx";

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <HomePage />
            </TransitionComponent>
          }
        />
        <Route
          path="/services/:type"
          element={
            <TransitionComponent>
              <ServicesPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/login"
          element={
            <TransitionComponent>
              <LoginPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/change-password"
          element={
            <TransitionComponent>
              <ChangePasswordPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/product/:type"
          element={
            <TransitionComponent>
              <ProductPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/order"
          element={
            <TransitionComponent>
              <OrderPage />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
