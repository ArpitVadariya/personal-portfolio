import React, { useState } from "react";

function Navbar() {
  const [cnt, setCnt] = useState(0);

  const openmenu = () => {
    var sidemenu = document.getElementById("sidemenu");

    if (cnt) {
      sidemenu.style.right = "-200px";
      console.log("close");
      setCnt(0);
    } else {
      console.log("open");
      sidemenu.style.right = "0";
      setCnt(1);
    }
  };

  return (
    <>
      <nav>
        <img src={require("./images/logo.png")} alt="logo" className="logo" />
        <ul id="sidemenu">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="cross" onClick={openmenu}>
            ❌
          </button>
        </ul>
        <button className="equal" onClick={openmenu}>
          🟰
        </button>
      </nav>
      <div className="header-text">
        <p>Developer</p>
        <h1>
          Hi, I am <span>Arpitkumar</span> <br /> Vadariya
        </h1>
      </div>
    </>
  );
}

export default Navbar;
