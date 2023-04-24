import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}{" "}
      </Slide>
    </div>
  );
};

export default Home;
