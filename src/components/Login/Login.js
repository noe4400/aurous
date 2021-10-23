import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    visible: false,
  });
  const history = useHistory();
  const stateHandler = (key, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const inputHandler = (e) => {
    if (e.target.id === "username") {
      stateHandler("username", e.target.value);
    } else {
      stateHandler("password", e.target.value);
    }
  };
  const visiblePassHandler = () => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        visible: !prevState.visible,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hit submit button");
    history.push("/home");
  };

  return (
    <div className="login-container">
      <h1 className="text-center ">Aurous</h1>
      <form>
        <h2 className="text-center text-input">Usuario</h2>

        <div className="form-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            id="username"
            className="login-input"
            onChange={inputHandler}
            maxlength="16"
          />
        </div>

        <h2 className="text-center text-input">Contraseña</h2>

        <div className="form-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type={userInput.visible ? "text" : "password"}
            id="password"
            className="login-input"
            value={userInput.password}
            onChange={inputHandler}
            maxlength="16"
          />
          <div className="icon-pass">
            {!userInput.visible && userInput.password.length > 0 && (
              <FontAwesomeIcon icon={faEye} onClick={visiblePassHandler} />
            )}
            {userInput.visible && userInput.password.length > 0 && (
              <FontAwesomeIcon icon={faEyeSlash} onClick={visiblePassHandler} />
            )}
          </div>
        </div>
        <input
          type="submit"
          className="submit-btn"
          value="Login"
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

export default Login;
