import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/FoodSaviour-v3.png";

export default function Nav() {
  const [user] = useState(JSON.parse(localStorage.getItem("authUser")));
  console.log(user);
  return (
    <nav>
      <NavLink to="/">
        <img class="logo" src={logo}></img>
      </NavLink>
      <div id="posts">
        <NavLink to="/">Explore</NavLink>
      </div>
      {user.admin === "1" && (
        <div id="create">
          <NavLink to="/create">Create</NavLink>
        </div>
      )}
      <div id="profile">
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}
