import React from "react";
import Home from "./Home/Home";
import "./HomePage.scss";
import Home1 from "../assets/home1.jpg";
import Home5 from "../assets/home5.jpeg";
import Home3 from "../assets/home3.jpeg";
import Home4 from "../assets/home4.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-up">
        <img src={Home1} alt="home1" className="home1" />
        <img src={Home5} alt="home5" className="home5" />
      </div>
      <Home />
      <div className="homepage-down">
        <img src={Home3} alt="home3" className="home3" />
        <img src={Home4} alt="home4" className="home4" />
      </div>
    </div>
  );
};

export default HomePage;
