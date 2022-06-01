import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../store/store";
import Auth from "../pages/Auth";
import CountryPage from "../pages/CountryPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navigation from "./Navigation";

function AppRouter({ isLogIn }) {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          {isLogIn ? (
            <>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route path="/country" element={<CountryPage />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<Auth />} />
            </>
          )}
        </Routes>
      </Provider>
    </Router>
  );
}

export default AppRouter;
