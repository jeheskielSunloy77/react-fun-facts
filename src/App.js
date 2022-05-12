import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [appMode, setAppMode] = useState(false);

  function toggleDarkMode() {
    setAppMode((oldVal) => !oldVal);
  }

  return (
    <div className="container">
      <Navbar darkMode={appMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={appMode} />
    </div>
  );
}
