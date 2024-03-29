import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const url = "https://foodsaviourapi.nicklasandie.dk/posts/";
      const response = await fetch(url);
      const responseData = await response.json();
      setPosts(responseData.data);
    }
    getPosts();
  }, []);

  return (
    <section className="page">
      <h1>Secure your bag</h1>
      <section className="grid-container">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </section>
    </section>
  );
}
