import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import { cards } from "../../data";
import { projects } from "../../data";

import CatCard from "../../components/catCard/CatCard";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ProjectCard from "../../components/catCard/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
            <AiOutlineCheckCircle />
            Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          
          <div className="title">
           <AiOutlineCheckCircle />
           Get quality work done quickly
           </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
         
          <div className="title">
              <AiOutlineCheckCircle />
              Pay when you're happy
              </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          
          <div className="title">
            <AiOutlineCheckCircle />
            Count on 24/7 support
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
       
       
          </div>
          <div className="item">
            <video src="../../../img/video.mp4"  controls/>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A solution built for <i>business</i></h1>
            <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
        

          <div className="title">
            <AiOutlineCheckCircle />
            Talent matching
          </div>
          
          <div className="title">
            <AiOutlineCheckCircle />
            Dedicated account management
          </div>

          
          <div className="title">
            <AiOutlineCheckCircle />
            Team collaboration tools
          </div>

          
          <div className="title">
            <AiOutlineCheckCircle />
            Business payment solutions
          </div>
          <button>Explore Fiverr Business</button>
          </div>
          
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
