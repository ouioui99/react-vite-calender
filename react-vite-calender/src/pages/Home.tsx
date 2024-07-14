import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigations/BottomNavigation";

export default function Home() {
  return (
    <>
      <Link to="/login">Login</Link>
      <div>Home</div>
      <BottomNavigation />
    </>
  );
}
