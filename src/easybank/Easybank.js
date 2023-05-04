import Header from "./header";
import "./easybank.css";
import Detail from "./detail";
import Blog from "./blog";
import { useEffect, useState } from "react";

function Easybank() {
  const [background, setBackground] = useState("bg-intro-mobile.svg");

  useEffect(() => {
    if (window.innerWidth >= 850) {
      setBackground("bg-intro-desktop.svg");
    }
    window.addEventListener("resize", function () {
      if (this.window.innerWidth >= 850) {
        setBackground("bg-intro-desktop.svg");
      } else {
        setBackground("bg-intro-mobile.svg");
      }
    });
    return () => {
      window.removeEventListener("resize", function () {
        if (this.window.innerWidth >= 850) {
          setBackground("bg-intro-desktop.svg");
        } else {
          setBackground("bg-intro-mobile.svg");
        }
      });
    };
  }, []);

  return (
    <main>
      <Header />
      <section className="home">
        <div className="mockup">
          <img src={background} alt="background" className="background" />
          <img
            src="easy-img\image-mockups.png"
            alt="phones"
            className="phones"
          />
        </div>
        <div className="detail">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online, Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button>Request Invite</button>
        </div>
      </section>
      <Detail />
      <Blog />
      <footer>
        <div className="social">
          <div className="logo">
            <img src="easy-img\logo.svg" alt="logo" />
            <h1 className="name">easybank</h1>
            <div className="icon">
              <img src="icon-facebook.svg" alt="facebook" />
              <img src="icon-youtube.svg" alt="youtube" />
              <img src="icon-twitter.svg" alt="twitter" />
              <img src="icon-pinterest.svg" alt="pinterest" />
              <img src="icon-instagram.svg" alt="instagram" />
            </div>
          </div>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="button">
          <button>Request Invite</button>
          <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}

export default Easybank;
