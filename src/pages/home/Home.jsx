import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}{" "}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <AiOutlineCheckCircle />
            Stick to your budget
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <h1>The best part? Everything.</h1>
            <AiOutlineCheckCircle />
            Stick to your budget
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <h1>The best part? Everything.</h1>
            <AiOutlineCheckCircle />
            Stick to your budget
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <h1>The best part? Everything.</h1>
            <AiOutlineCheckCircle />
            Stick to your budget
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
