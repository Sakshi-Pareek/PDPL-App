import React from "react";

function Loader() {
  return (
    <section
      style={{ zIndex: "999999999" }}
      className="bg_sky top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <div className="cs-loader-inner p-0">
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
