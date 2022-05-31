import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navigation from "./Navigation";

function AppRouter({ isLogIn }) {
  return (
    <Router>
      <Navigation />
      <Routes>
        {isLogIn ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
