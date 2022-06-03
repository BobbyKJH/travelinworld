import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../store/store";
import Auth from "../pages/Auth";
import CountryPage from "../pages/CountryPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navigation from "./Navigation";
import ExchangePage from "../pages/ExchangePage";
import CountryDetail from "./CountryList/CountryDetail";

function AppRouter({ isLogIn }) {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          {isLogIn ? (
            <>
              {/* 홈 */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />

              {/* 대륙 나라 */}
              <Route exact path="/country" element={<CountryPage />} />
              <Route exact path="/country/:id" element={<CountryDetail />} />

              {/* 환전 */}
              <Route exact path="/exchange" element={<ExchangePage />} />
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
