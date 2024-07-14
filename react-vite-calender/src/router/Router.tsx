import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegistShift from "../pages/RegistShift";
import Signup from "../pages/Signup";
import Setting from "../pages/Setting";
import BottomNavigation from "../components/BottomNavigations/BottomNavigation";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/regist-shift" element={<RegistShift />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </>
  );
}
