import { useState } from "react";

import "./App.css";
import Router from "./router/Router";
import BottomNavigation from "./components/BottomNavigations/BottomNavigation";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
