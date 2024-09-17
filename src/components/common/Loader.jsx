import React, { useEffect, useState } from "react";

function Loader() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);

        // Simulate an API call delay by 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        console.log("API data:", data);

        // Set loader to false once the API data is received
        setLoader(false);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setLoader(false); // Stop the loader if there's an error
      }
    };

    fetchData();
  }, []);

  if (!loader) return null;

  return (
    <section
      style={{ zIndex: "999999999" }}
      className="bg_blue top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
      <div className="cs-loader-inner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
      </div>
    </section>
  );
}

export default Loader;
