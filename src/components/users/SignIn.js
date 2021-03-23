import { useState } from "react";
import "./SignIn.css";
import facebook from "../../assets/img/Facebook@2x.png";
import google from "../../assets/img/google@2x.png";
import mailInput from "../../assets/img/mailInput.png";
import keyInput from "../../assets/img/key@2x.png";
import arrowInput from "../../assets/img/arrow.png";
import companyLogo from "../../assets/img/logo@2x.png";

const SignIn = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const eventHandler = (e) => {
    let type = e.target.type;
    console.log(e.target.value);
    if (type === "email") {
      setLogInData({
        ...logInData,
        email: e.target.value,
      });
    } else if (type === "password") {
      setLogInData({
        ...logInData,
        password: e.target.value,
      });
    } else {
      setLogInData({
        ...logInData,
      });
    }
  };

  const userLogIn = (event) => {
    event.preventDefault();
    console.log(logInData);
  };
  return (
    <div id="signIn">
      <div id="content">
        <div className="insideContent">
          <div className="logo">
            <img src={companyLogo} alt="" className="logoImg" />
          </div>
          <h1 className="companyName">Virdrobe</h1>
          <div className="socialsMedia">
            <img src={facebook} alt="facebook logo" className="facebook" />
            <img src={google} alt="google logo" className="google" />
          </div>
          <div className="or">Or</div>
          <form onSubmit={userLogIn} id="form">
            <div className="mailInput mainInput">
              <img src={mailInput} className="mailIcon icon" alt="mail input" />
              <input
                type="email"
                className="email input"
                placeholder="Email ID"
                value={logInData.email}
                onChange={eventHandler}
              />
            </div>
            <div className="passwordInput mainInput">
              <img src={keyInput} alt="" className="keyIcon icon" />
              <input
                type="password"
                className="password input"
                placeholder="Password"
                value={logInData.password}
                onChange={eventHandler}
              />
            </div>
            <div className="checkInput">
              <div className="checkBoxDiv">
                <input type="checkbox" name="" className="checkBox" />
                <h3 className="keepMeLogin">Keep me logged in</h3>
              </div>
              <h3 className="forgotPassword">
                <a href="">Forgot Password</a>
              </h3>
            </div>
            <div className="loginBtn">
              <button type="submit" className="btn">
                Login
              </button>
              <img src={arrowInput} alt="arrow key" className="arrow" />
            </div>
          </form>
          <div id="outline"></div>
          <div className="newUser">
            <h1 className="heading">
              New User?
              <span className="link">
                <a href="">Sign up</a>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="image">
        <div className="signInImg">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNsb3RoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="login image"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
