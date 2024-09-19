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

  return <>{loader ? <Loader /> : <MainRoute />}</>;
}

export default App;
