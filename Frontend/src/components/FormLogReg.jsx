import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Logo from "../assets/img/Logo.jpeg";
import google from "../assets/img/google.png";

// Envolver Button en un componente que use ref directamente
const CustomButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} className="custom-button">{props.children}</button>
));

// Envolver Form en un componente que use ref directamente
const CustomForm = React.forwardRef((props, ref) => (
  <form ref={ref} {...props} className="custom-form">{props.children}</form>
));

const LoginForm = React.forwardRef((props, ref) => (
  <CustomForm ref={ref}>
    <div className="login-segment">
      <div className="login-input">
        <input type="email" placeholder="E-mail" id='emailLogin'/>
      </div>
      <div className="login-input">
        <input type="password" placeholder="Contraseña" />
      </div>
      <CustomButton>
        Iniciar Sesión
      </CustomButton>
    </div>
  </CustomForm>
));

const RegisterForm = React.forwardRef((props, ref) => (
  <CustomForm ref={ref}>
    <div className="register-segment">
      <div className="register-input">
        <input type="email" placeholder="E-mail" id='emailRegister'/>
      </div>
      <div className="register-input">
        <input type="text" placeholder="Nombre Completo" />
      </div>
      <div className="register-input">
        <input type="password" placeholder="Contraseña" />
      </div>
      <div className="register-input">
        <input type="password" placeholder="Confirmar Contraseña" />
      </div>
      <CustomButton>
        Registrarse
      </CustomButton>
      <div className="fastLogin">
        <span className="fastLogin-text">O registrate con</span>
        <div className="login-text">
          <img className="avatar" src={google} alt="Google login" />
        </div>
      </div>
    </div>
  </CustomForm>
));


const FormLogReg = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const loginFormRef = useRef();
  const registerFormRef = useRef();

  const loginSpring = useSpring({
    opacity: showLoginForm ? 1 : 0,
    transform: showLoginForm ? 'scale(1)' : 'scale(0.9)',
    display: showLoginForm ? 'block' : 'none',
  });

  const registerSpring = useSpring({
    opacity: showLoginForm ? 0 : 1,
    transform: showLoginForm ? 'scale(0.9)' : 'scale(1)',
    display: showLoginForm ? 'none' : 'block',
  });

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
<div className="form-container">
  <div className="form-column">
    <animated.div style={loginSpring} className="login-form">
      <div className="login-header">
        <img src={Logo} alt="Logo" />
        <span className='span-login-header'>Inicia Sesión en tu cuenta</span>
      </div>
      <LoginForm ref={loginFormRef} />
      <div className="message">
        ¿Eres nuevo? <a href='#' onClick={handleToggleForm}>Empezemos</a>
      </div>
    </animated.div>

    <animated.div style={registerSpring} className="register-form">
      <div className="register-header">
        <img src={Logo} alt="Logo" />
        <span className="span-register-header">Empecemos</span>
      </div>
      <RegisterForm ref={registerFormRef} />
      <div className="message">
        ¿Tienes cuenta? <a href='#' onClick={handleToggleForm}>Inicia Sesión</a>
      </div>
    </animated.div>
  </div>
</div>


  );
};

const FormLogRegWrapper = () => {
  return (
    <React.Fragment>
      <FormLogReg />
    </React.Fragment>
  );
};

export default FormLogRegWrapper;
