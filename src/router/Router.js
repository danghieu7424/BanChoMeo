import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition.jsx';

import HomePage from '../components/homePage.jsx';


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
          path="/login"
          element={
            <TransitionComponent>
                            <></>

            </TransitionComponent>
          }
        />
        
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
