import React, { useEffect, useState } from "react";
import imgPlaceholder from "../assets/img/img-placeholder.jpg";

export default function PostForm({ readonly, savePost, post }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      //Post er en prop, med info fra Updatepage
      setTitle(post.title);
      setBody(post.body);
      setTime(post.time);
      setLocation(post.location);
      setImage(post.image);
    }
  }, [post]); // useEffect bliver kaldt hver gang post bliver ændret.

  /**
   * handleImageChange bliver kaldt hver gang brugeren vælger et billede i fil syatemet
   */
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // billed fil størrelser skal være under 0,5MB
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage state
    } else {
      // hvis den ikke er under 0.5MB bliver der vist en error message ved hjælp af errorMessage
      setErrorMessage("The image file is too big!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      // Laver et nyt objekt til at holde værdien from states / input fields
      title: title,
      image: image,
      body: body,
      time: time,
      location: location,
    };

    const validForm =
      formData.title &&
      formData.body &&
      formData.time &&
      formData.location &&
      formData.image; // vil give en fejl hvis ingen af properties ikke har en værdi
    if (validForm) {
      // if all fields/ properties are filled, then call savePost
      // hvis alle felter er udfyldt, kan der blive kaldt savePost
      savePost(formData);
    } else {
      // hvis ikke: errorMessage state
      setErrorMessage("Please, fill in all fields.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title || ""}
          placeholder="Type a title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={body || ""}
          placeholder="Type a body text"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label>
        Pickup time
        <input
          type="text"
          value={time || ""}
          placeholder="Insert pickup time"
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Pickup location
        <input
          type="text"
          value={location || ""}
          placeholder="Insert pickup location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Image
        <input
          type="file"
          className="file-input"
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          className="image-preview"
          src={image || imgPlaceholder}
          alt="Choose"
          onError={(event) => (event.target.src = imgPlaceholder)}
        />
      </label>
      <p className="text-error">{errorMessage}</p>
      <button type="submit">Create offer</button>
    </form>
  );
}
