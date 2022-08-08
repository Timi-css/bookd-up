import React from "react";
import "./main.scss";

const MainPage = () => {
  return (
    <section className="content">
      <div className="hero-section">
        <div className="hero-header-box">
          <h1 className="hero-header"> A Book Lovers Hub</h1>
        </div>

        <div className="hero-text-box">
          <span className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate massa et posuere dictum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas
          </span>
        </div>
        <div className="cta-box">
          <button className="cta-button">Start a Bookclub</button>
        </div>
      </div>
      <div className="hero-image-box">
        <div className="blob"></div>
      </div>
    </section>
  );
};

export default MainPage;
