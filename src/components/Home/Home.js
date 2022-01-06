import React from "react";
import "./Home.scss";
import Typewritter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Crypto Currency</h2>
      <h1 className="home-heading">Best new ideas in money </h1>
      <div className="slider">
        <Typewritter
          onInit={(Typewritter) => {
            Typewritter.typeString(
              "Managing the risks and opportunities of engaging in digital investments!"
            )
              .pauseFor(2000)
              .deleteAll();
            Typewritter.typeString(
              "Enabling simple, real-time, and secure money transfers!"
            )
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <button className="read-btn">Read More</button>
    </div>
  );
};

export default Home;
