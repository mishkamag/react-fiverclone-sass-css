import React, { useState } from "react";
import "./Register.scss";
import newRequest from "../../helpers/newRequest";
import upload from "../../helpers/upload";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Register() {
  const [file, setFile] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    phone: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const changeSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      toast.success("You registed successfull!", { hideProgressBar: true });
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong", { hideProgressBar: true });
    }
  };

  console.log(user);
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={changeHandler}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={changeHandler}
          />

          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={changeHandler} />

          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Geo"
            onChange={changeHandler}
          />

          <button type="submit">Register</button>
        </div>

        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={changeSeller} />
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+995 234 567 89"
            onChange={changeHandler}
          />

          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={changeHandler}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
