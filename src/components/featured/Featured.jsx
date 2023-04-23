import React from "react";
import "./Featured.scss";
import { FiSearch } from "react-icons/fi";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <FiSearch
                style={{
                  color: "black",
                  margin: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
              <input type="text" placeholder="Try building mobil app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
