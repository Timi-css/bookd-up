import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-header-box">
        <h1 className="login-header">Login</h1>
      </div>

      <div className="form-box">
        <form>
          <label className="username"></label>
          <placeholder>Username</placeholder>
        </form>

        <form>
          <label className="username"></label>
          <placeholder>Passowrd</placeholder>
        </form>

        <button className="login-btn">Login</button>
      </div>
    </section>
  );
};

export default Login;
