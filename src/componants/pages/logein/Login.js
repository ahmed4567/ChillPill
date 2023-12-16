import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./style.css";
import logo from "./chill-pill-favicon-color.png";
import backgroundImage from "./wallpaperflare.com_wallpaper.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
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

            <button className="butn" type="submit" onClick={onSubmit}>
              Sign in
            </button>
          </form>

          <p>
            Join Chill Pill{" "}
            <NavLink className="nav_link" to="/Singup">
              Sign UP
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}
