import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [isMenuOpen, isMenuOpenSet] = useState(false);
  const toggleMenu = () => console.log("click") || isMenuOpenSet(!isMenuOpen);
  return (
    <>
      <section className="absolute right-0 w-full h-min-full p-20 flex flex-col">
        <header className="absolute top-0 left-0 z-40 flex flex-row justify-between items-center w-screen p-20">
          <h2 className="uppercase font-bold text-3xl">Travel</h2>
          {!isMenuOpen && (
            <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} />
          )}
        </header>
        <video
          src="cdr70t80.mp4"
          muted
          loop
          autoPlay
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            zIndex: 1,
          }}
        ></video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 2,
            background: "black",
            opacity: "80%",
          }}
        ></div>
        <div className="flex flex-col p-20 items-start z-10">
          <h2 className="uppercase text-8xl font-extrabold">Never Stop</h2>
          <h3 className="uppercase text-6xl font-bold">Exploring The World</h3>
          <p className="my-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            labore impedit magni, iure nisi et explicabo, minima corporis
            tempora ab aspernatur fuga deleniti. Libero excepturi necessitatibus
            a nam corporis suscipit.
          </p>
          <a
            href="#"
            className="my-10 px-6 py-3 bg-gray-100 text-gray-700 tracking-widest rounded uppercase"
          >
            Explore
          </a>
        </div>

        <ul className="mt-10 z-10">
          <li className="inline mr-6">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </li>
          <li className="inline mr-6">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </li>
          <li className="inline mr-6">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </li>
          <li className="inline">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </li>
        </ul>
      </section>

      {isMenuOpen && (
        <div
          className="z-40 absolute right-0 m-16 flex flex-col rounded opacity-90"
          style={{ background: "#333" }}
        >
          {isMenuOpen && (
            <FontAwesomeIcon
              onClick={toggleMenu}
              icon={faTimes}
              size="2x"
              className="ml-auto m-4 z-50"
            />
          )}
          <ul className="p-6 flex flex-col gap-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
