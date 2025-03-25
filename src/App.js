import "./App.css";
import React, { useEffect, useState } from "react";
import MainRoute from "./components/common/MainRoute";
import Aos from "aos";
import "aos/dist/aos.css";
import { BacktoTop } from "./components/Icon";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 900,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  // ======================back-to-top===================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div>
        <MainRoute />
        <div>
          <button
            className={`${
              backToTop
                ? "position-fixed back_to_top updown_ani cursor_pointer d-flex justify-content-center align-items-center bg_sky"
                : "d-none"
            }`}
            onClick={() => top()}
          >
            <BacktoTop />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
