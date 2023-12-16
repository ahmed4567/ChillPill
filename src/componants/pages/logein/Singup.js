import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./style.css";
import logo from "./chill-pill-favicon-color.png";
import backgroundImage from "./wallpaperflare.com_wallpaper.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password, date, phone)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section
        className="signUpCard"
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          loading: "lazy",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="card">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="logo_text"> Chill Pill </h1>
          <form>
            <div className="dataInput">
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>
            <div className="dataInput">
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="dataInput">
              <input
                type="date"
                label="date of birth"
                onChange={(e) => setDate(e.target.value)}
                required
                placeholder="dd/mm/yy"
              />
            </div>
            <div className="dataInput">
              <input
                type="number"
                label="phone number"
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="01xxxxxxx"
              />
            </div>
            <button className="butn" type="submit" onClick={onSubmit}>
              Sign up
            </button>
          </form>

          <p>
            Chill Pill Frind{" "}
            <NavLink className="nav_link" to="/login">
              Sign in
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
