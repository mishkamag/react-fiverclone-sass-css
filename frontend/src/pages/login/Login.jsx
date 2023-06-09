import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../helpers/newRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Sign successfull!", { hideProgressBar: true });
      navigate("/");
    } catch (err) {
      toast.error("Wrong Credentials", { hideProgressBar: true });
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
}

export default Login;
