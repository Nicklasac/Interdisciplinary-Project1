import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import UserAvatar from "../components/UserAvatar";

//vis mere side
export default function CheckoutPage() {
  const [post, setPost] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const url = `https://foodsaviourapi.nicklasandie.dk/posts/?id=${params.postId}`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const responseData = await response.json();
      setPost(responseData.data[0]);
    }
    getPost();
  }, [url]);

  function myFunction() {
    window.alert("Your order has been confirmed!");
    navigate("/");
  }

  if (!post.uid) {
    return null;
  }
  //den samme som post card den poster bare flere nye informationer
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
        <button onClick={myFunction}>Checkout</button>
      </section>
    </section>
  );
}
