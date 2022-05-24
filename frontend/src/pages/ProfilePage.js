import React, { useState } from "react";
import imgPlaceholder from "../assets/img/img-placeholder.jpg";
import { useNavigate } from "react-router-dom";

export default function ProfilePage({ setAuth }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = `https://foodsaviourapi.nicklasandie.dk/users/?id=${user.id}`;
    const userToUpdate = {
      id: user.id,
      name: user.name,
      title: user.title,
      mail: user.mail,
      phone: user.phone,
      image: user.image,
    };
    console.log(userToUpdate);

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(userToUpdate),
    });
    const responseObject = await response.json();

    console.log(responseObject);

    if (responseObject.status === "success") {
      localStorage.setItem("authUser", JSON.stringify(responseObject.data[0]));
    }
  }

  function handleSignOut() {
    setAuth(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("authUser");
    navigate("/sign-in");
  }

  /**
   * handleImageChange bliver kaldt hver gang brugeren vælger et billede.
   * The event is fired by the input file field in the form
   */
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // billed fil skal være under 0.5MB
      const reader = new FileReader();
      reader.onload = (event) => {
        setUser((prevUser) => ({ ...prevUser, image: event.target.result }));
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage
    } else {
      // hvis ikke under 0.5 MB bliver der vist errorMessage
      setErrorMessage("The image file is too big!");
    }
  }

  return (
    <section className="page">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
            placeholder="Type name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={user.mail}
            onChange={handleChange}
            name="email"
            placeholder="Type email"
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            value={user.phone || ""}
            onChange={handleChange}
            name="phone"
            placeholder="Type phone number"
          />
        </label>
        <label>
          Address
          <input
            type="text"
            value={user.title || ""}
            onChange={handleChange}
            name="title"
            placeholder="Enter your address"
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
            src={user.image || imgPlaceholder}
            alt="Choose"
            onError={(event) => (event.target.src = imgPlaceholder)}
          />
        </label>
        <p className="text-error">{errorMessage}</p>
        <button>Save User</button>
      </form>
      <button className="btn-outline" onClick={handleSignOut}>
        Sign Out
      </button>
    </section>
  );
}
