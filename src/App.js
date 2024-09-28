import "./App.css";
import React, { useEffect, useState } from "react";
import MainRoute from "./components/common/MainRoute";
import Loader from "./components/common/Loader";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
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
  // --------------------loader-----------------------------
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const scrollPosition = window.scrollY;

    const fetchData = async () => {
      try {
        setLoader(true);
        document.body.style.overflow = "hidden";
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoader(false);
        document.body.style.overflow = "auto";
        window.scrollTo(0, scrollPosition);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setLoader(false);
        document.body.style.overflow = "auto";
        window.scrollTo(0, scrollPosition);
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  return <>{loader ? <Loader /> : <>
    <MainRoute />
    <div>
      <button className={`${backToTop ? "position-fixed back_to_top updown_ani cursor_pointer d-flex justify-content-center align-items-center  bg_sky" : "d-none"}`} onClick={() => top()}><svg width="16" height="16" fill="#FFFFFF" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
        ></path>
        <path
          fillRule="evenodd"
          d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        ></path>
      </svg></button>
    </div></>
  }</>;
}

export default App;
