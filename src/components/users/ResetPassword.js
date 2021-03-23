import resetEmail from "../../assets/img/resetEmail.png";

const ResetPassword = () => {
  return (
    <div id="resetPassword">
      <div id="signIn">
        <div id="content">
          <div className="insideContent">
            <div className="resetPasswordLogo">
              <img src={resetEmail} alt="" className="resetImg" />
            </div>
            <h1 className="companyName">Email Sent!</h1>
            <p className="resetParagraph">
              A new password has been sent to your respective email address.
              Please use the new password to login into the App
            </p>
            <button className="resetBtn">Submit</button>
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

export default ResetPassword;
