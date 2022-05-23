import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
  const [user] = useState(JSON.parse(localStorage.getItem("authUser")));
  const navigate = useNavigate();

  /**
   * handleClick is called when user clicks on the Article (PostCard)
   */
  function handleClick() {
    navigate(`posts/${post.id}`);
  }
  function checkoutClick() {
    navigate(`checkout/${post.id}`);
  }

  return (
    <article>
      <UserAvatar uid={post.uid} />
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={checkoutClick} type="">
        view more
      </button>
      {user.admin === "1" && (
        <button onClick={handleClick} type="">
          update
        </button>
      )}
    </article>
  );
}
