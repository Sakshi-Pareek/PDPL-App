import "./App.css";
import React, { useEffect, useState } from "react";
import MainRoute from "./components/common/MainRoute";
import Aos from "aos";
import "aos/dist/aos.css";
import { BacktoTop } from "./components/Icon";

function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 900, easing: "ease-in-out" });
  }, []);

  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setBackToTop(document.documentElement.scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MainRoute />
      {backToTop && (
        <button
          className="position-fixed back_to_top updown_ani cursor_pointer d-flex justify-content-center align-items-center bg_sky"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BacktoTop />
        </button>
      )}
    </>
  );
}

export default App;
