import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../helpers/newRequest";

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

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
            {!currentUser && (
              <Link to="/login" className="link">
                Sign In
              </Link>
            )}
            {!currentUser?.isSeller && <li>Become a Seller</li>}
            {!currentUser && (
              <Link to="/register">
                <button>Join</button>
              </Link>
            )}
            {currentUser && (
              <div
                className="user"
                onClick={() => {
                  setOptions(!options);
                }}
              >
                <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                <span>
                  {currentUser?.username[0].toUpperCase() +
                    currentUser?.username.substring(1)}
                </span>
                {options && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/mygigs" className="link">
                          Gigs
                        </Link>
                        <Link to="/add" className="link">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="link">
                      Orders
                    </Link>
                    <Link to="/messages" className="link">
                      Messages
                    </Link>
                    <Link className="link" onClick={logoutHandler}>
                      Logout
                    </Link>
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
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
