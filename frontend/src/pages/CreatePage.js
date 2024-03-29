import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useState } from "react";

export default function CreatePage() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const navigate = useNavigate();

  async function createPost(newPost) {
    newPost.uid = user.id;

    const url = "https://foodsaviourapi.nicklasandie.dk/posts/";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      navigate("/");
    }
  }

  return (
    <section className="page">
      <h1>Create a mystery bag </h1>
      <PostForm savePost={createPost} />
    </section>
  );
}
