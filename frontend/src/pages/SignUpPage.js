import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/FoodSaviour-v3.png";

export default function SignUpPage({ setAuth }) {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {}, []);

  async function handleSignUp(event) {
    event.preventDefault();
    const mail = event.target.mail.value; //mail værdien fra input feltet sign in
    const password = event.target.password.value; // password værdi fra input feltet sign in
    const passwordCheck = event.target.passwordCheck.value; // password værdi fra input feltet sign in

    const name = event.target.name.value; // password værdi fra input feltet sign in

    const newUser = {
      mail: mail,
      password: password,
      passwordCheck: passwordCheck,
      name: name,
    };
    console.log(newUser);
    const response = await fetch(
      "https://foodsaviourapi.nicklasandie.dk/auth/?action=signup",
      {
        method: "POST",
        body: JSON.stringify(newUser),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.error) {
      setErrorMessage(data.error);
    } else if (data.signupSuccess) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("authUser", JSON.stringify(data.user));
      setAuth(true);
    }
  }

  return (
    <section className="page">
      <img className="signInImg" src={logo} />
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" name="name" placeholder="Type your name" />
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <input
          type="password"
          name="passwordCheck"
          placeholder="Type your password again"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Sign Up</button>
      </form>
      <p className="text-center">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </section>
  );
}
