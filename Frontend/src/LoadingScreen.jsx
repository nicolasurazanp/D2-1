import React from 'react';
import Logo from "./assets/img/Logo.png";
import './LoadingScreen.css'; 


const LoadingScreen = () => {
    return (
      <div className="loading-screen">
        <div className="loader">
            <img src={Logo} alt="Logo" className="loading-logo" />
          <div className="loading-circle"></div>
        </div>
      </div>
    );
  };

export default LoadingScreen;
