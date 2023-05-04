import { useState, useEffect } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  const [burger, setBurger] = useState("icon-hamburger.svg");

  const handleMenu = () => {
    if (menu === false) {
      setMenu(true);
      setBurger("icon-close.svg");
    } else {
      setMenu(false);
      setBurger("icon-hamburger.svg");
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 850) {
      setMenu(true);
    }
    window.addEventListener("resize", function () {
      if (this.window.innerWidth >= 850) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    });
    return () => {
      window.removeEventListener("resize", function () {
        if (this.window.innerWidth >= 850) {
          setMenu(true);
        } else {
          setMenu(false);
        }
      });
    };
  }, []);

  return (
    <header>
      <img src="easy-img\logo.svg" alt="logo" />
      <img src={burger} alt="logo" onClick={handleMenu} className="burger" />
      {menu && (
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      )}
      <button className="invite-btn">Request Invite</button>
    </header>
  );
}

export default Header;
