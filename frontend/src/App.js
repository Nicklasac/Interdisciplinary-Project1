import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // standart værdi kommer fra localStorage

  // variable holder alle private ruter også nav bar
  const privateRoutes = (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:postId" element={<UpdatePage />} />
        <Route path="/checkout/:postId" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage setAuth={setIsAuth} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );

  // variable holder alle private ruter uden nav bar
  const publicRoutes = (
    <Routes>
      <Route path="/sign-in" element={<SignInPage setAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setAuth={setIsAuth} />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );

  // hvis brugeren er bekreftet, vis privateRoutes, eller publicRoutes
  // også, vis eller ikke vis <loader/> baseret på showLoader state
  return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}
