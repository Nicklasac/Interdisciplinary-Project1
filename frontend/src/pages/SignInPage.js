import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/FoodSaviour-v3.png";

export default function SignInPage({ setAuth }) {
  const [errorMessage, setErrorMessage] = useState("");

  async function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value; //mail værdien fra input feltet sign in
    const password = event.target.password.value; // password værdi fra input feltet sign in
    const loginObject = { mail: mail, password: password };
    const response = await fetch(
      "https://foodsaviourapi.nicklasandie.dk/auth/?action=login",
      {
        method: "POST",
        body: JSON.stringify(loginObject),
      }
    );

    const data = await response.json();
    if (data.error) {
      setErrorMessage(data.error);
    }

    if (data.authenticated) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("authUser", JSON.stringify(data.user));
      setAuth(true);
    } else {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("authUser");
    }
  }
  return (
    <section className="page">
      <img className="signInImg" src={logo} />
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Sign in</button>
      </form>
      <p className="text-center">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </section>
  );
}
