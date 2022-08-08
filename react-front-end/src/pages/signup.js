import React from "react";
import "./signup.scss";

const SignUp = () => {
  return (
    <section className="sign-up-section">
      <div className="sign-up-header-box">
        <h1 className="sign-up-header"> Sign Up</h1>
      </div>

      <div className="form-box">
        <form>
          <label className="username"></label>
          <placeholder>Username</placeholder>
        </form>

        <form>
          <label className="username"></label>
          <placeholder>Email</placeholder>
        </form>

        <form>
          <label className="username"></label>
          <placeholder>Password</placeholder>
        </form>

        <button className="signup-btn"> Sign Up</button>
      </div>
    </section>
  );
};

export default SignUp;
