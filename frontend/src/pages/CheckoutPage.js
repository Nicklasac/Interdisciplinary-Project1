import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import UserAvatar from "../components/UserAvatar";

export default function UpdatePage() {
  const [post, setPost] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:3000/backend/posts/?id=${params.postId}`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const responseData = await response.json();
      setPost(responseData.data[0]);
    }
    getPost();
  }, [url]);

  function myFunction() {
    alert("I am an alert box!");
  }

  function homepageClick() {
    navigate("/");
  }

  if (!post.uid) {
    return null;
  }
  return (
    <section className="page">
      <h1>Confirm order</h1>
      <section className="checkout">
        <div className="checkoutuser">
          <UserAvatar uid={post.uid} />
        </div>
        <img className="checkoutimg" src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr />
        <p>{post.time}</p>
        <p>{post.location}</p>
        <button onclick={homepageClick}>Checkout</button>
      </section>
    </section>
  );
}
