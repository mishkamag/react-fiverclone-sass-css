import React, { useEffect, useState } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState(false);

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
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiver</span>
          <span className="dot">.</span>
          {/* </Link> */}
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
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test1</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
