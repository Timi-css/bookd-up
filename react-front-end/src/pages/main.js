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

      {/* <section className="recommended-books-section">
        <div className="recommended-headerbox">
          <h2 className="recommended-books-header">Recommended Books</h2>
        </div>

        <div className="recommended-books">
          <div className="recommended-books-card">
            <div className="card-details">
              <span className="card-title">Avengers: End Game</span>
              <span className="author">Salma Ibrahim</span>
            </div>
          </div>

          <div className="recommended-books-card">
            <div className="card-details">
              <span className="card-title">Avengers: End Game</span>
              <span className="author">Salma Ibrahim</span>
            </div>
          </div>

          <div className="recommended-books-card">
            <div className="card-details">
              <span className="card-title">Avengers: End Game</span>
              <span className="author">Salma Ibrahim</span>
            </div>
          </div>

          <div className="recommended-books-card">
            <div className="card-details">
              <span className="card-title">Avengers: End Game</span>
              <span className="author">Salma Ibrahim</span>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default MainPage;
