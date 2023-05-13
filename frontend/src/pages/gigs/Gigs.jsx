import React from "react";
import "./Gigs.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../helpers/newRequest";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [hide, setHide] = useState(false);

  const reSortHandler = (type) => {
    setSort(type);
    setHide(false);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => newRequest("/gigs"),
  });
  console.log(data);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVER . GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with FIverr AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy </span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}{" "}
            </span>
            <AiOutlineDown
              style={{ cursor: "pointer" }}
              onClick={() => {
                setHide((prev) => !prev);
              }}
            />
            {hide && (
              <div className="rightMenu">
                <span onClick={() => reSortHandler("createdAt")}>Newest</span>
                <span onClick={() => reSortHandler("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
