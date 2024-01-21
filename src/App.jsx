import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import AppFun from "./contex/AppFun.jsx";

function App() {
  const [toggle, setToggle] = useState(false);




  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggle(!toggle);
    }, 10000); // Change image every 10 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [toggle]);

  return (
    <>
      <AppFun>
        <div className={toggle ? "main" : "main1"}>
          <Navbar />

          <Outlet />
        </div>
      </AppFun>
    </>
  );
}

export default App;
