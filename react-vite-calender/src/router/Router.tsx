import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegistShift from "../pages/RegistShift";
import Signup from "../pages/Signup";
import Setting from "../pages/Setting";
import BottomNavigation from "../components/BottomNavigations/BottomNavigation";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { UserAuthContext } from "../Contexts/UserContext";

export default function Router() {
  const { user, setUser, loading, setLoading }: any =
    useContext(UserAuthContext);
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route element={<PublicRouter />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Route>
          {/* private routes */}
          <Route element={<PrivateRouter />}>
            <Route path="/" element={<Home />} />
            <Route path="/regist-shift" element={<RegistShift />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Route>
        </Routes>
        {user ? <BottomNavigation /> : <></>}
      </BrowserRouter>
    </div>
  );
}
