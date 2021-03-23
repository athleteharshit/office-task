import forgotPassword from "../../assets/img/forgotPassword.png";
import mailInput from "../../assets/img/mailInput.png";


const ForgotPassword = () => {
  return (
    <div id="resetPassword">
      <div id="signIn">
        <div id="content">
          <div className="insideContent">
            <div className="resetPasswordLogo">
              <img src={forgotPassword} alt="" className="resetImg" />
            </div>
            <h1 className="companyName">Forgot Password</h1>
            <p className="resetParagraph">
              Please enter registered email id to receive reset password link
            </p>
            <form action="" id="forgotForm">
              <div className="mailInput mainInput">
                <img
                  src={mailInput}
                  className="mailIcon icon"
                  alt="mail input"
                />
                <input
                  type="email"
                  className="email input"
                  placeholder="Email ID"
                />
              </div>

              <button type="submit" className="resetBtn">
                Submit
              </button>
            </form>
            <div className="newUser">
              <h1 className="heading">
                Back to
                <span className="link">
                  <a href="">Login</a>
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
    </div>
  );
};

export default ForgotPassword;
