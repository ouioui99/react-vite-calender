import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegistShift from "../pages/RegistShift";
import Signup from "../pages/Signup";
import Setting from "../pages/Setting";
import BottomNavigation from "../components/BottomNavigations/BottomNavigation";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

export default function Router() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route element={<PublicRouter />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* private routes */}
          <Route element={<PrivateRouter />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/regist-shift" element={<RegistShift />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<h1>Not Found Page</h1>} /> */}
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}
