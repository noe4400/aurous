import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div className="login-container">
      <h1 className="text-center ">Aurous</h1>
      <form>
        <h2 className="text-center text-input">Usuario</h2>

        <div className="form-group">
          <FontAwesomeIcon icon={faUser} className="text-input" />
          <input type="text" className="login-input" />
        </div>

        <h2 className="text-center text-input">Contraseña</h2>

        <div className="form-group">
          <FontAwesomeIcon icon={faLock} className="text-input" />
          <input type="password" className="login-input" />
        </div>

        <input type="submit" className="submit-btn" value="Login" />
      </form>
    </div>
  );
};

export default Login;
