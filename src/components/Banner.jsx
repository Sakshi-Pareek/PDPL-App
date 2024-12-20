import React from "react";

const cardData = [
  { text: "PAN India presence" },
  { text: "Advance data analytics capabilities" },
  { text: "Wide product & Customer base" },
  { text: "Technology integration" },
  { text: "Compliant infrastructure & Process" },
];

const Banner = () => {
  return (
    <div className="px-xl-4 px-0 my-xl-5 my-0 max-w-1920 mx-auto">
      <div className="d-flex flex-xl-nowrap gap-2 flex-wrap justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="w-100">
            <div
              className={`text-center text-white px-4 py-xl-4 py-3 h-100 d-flex align-items-center justify-content-center text-center cursor_pointer bg_sky glass_effect transition position-relative overflow-hidden w-100`}
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-center">
                <h6 className="fs_md mb-0 text-center">{card.text}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
