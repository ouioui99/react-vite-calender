import { useState } from "react";

import "./App.css";
import Router from "./router/Router";
import BottomNavigation from "./components/BottomNavigations/BottomNavigation";
import { UserAuthProvider } from "./Contexts/UserContext";

function App() {
  return (
    <div className="container">
      <UserAuthProvider>
        <Router />
      </UserAuthProvider>
    </div>
  );
}

export default App;
