import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentUser = {
    id: 1,
    username: "mishka",
    isSeller: true,
  };

  return (
    <div
      className={
        active || location.pathname !== "/" ? "navbar active" : "navbar"
      }
    >
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiver</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>Fiverr Business</li>
            <li>Explore</li>
            <li>English</li>
            <li>Sign In</li>
            {!currentUser?.isSeller && <li>Become a Seller</li>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div
                className="user"
                onClick={() => {
                  setOptions(!options);
                }}
              >
                <img
                  src="https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-9/71698868_1100255983510799_7974481038502002688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3aTnWV0TqXsAX8i2TAh&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfClRm2YQkJoiyv7kpSDD86NIjT1KyTuBhR18b6bDFLxQQ&oe=646BADAC"
                  alt=""
                />
                <span>{currentUser?.username}</span>
                {options && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/mygigs" className="link">Gigs</Link>
                        <Link className="link">Add New Gig</Link>
                      </>
                    )}
                    <Link to="/orders" className="link">Orders</Link>
                    <Link className="link">Messages</Link>
                    <Link className="link">Logout</Link>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
      {(active || location.pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr/>
        </>
      )}
    </div>
  );
};

export default Navbar;
