import React from "react";

const Error = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "84vh",
        width: "100vw",
      }}
    >
      <dotlottie-player
        src="https://lottie.host/e73aaafe-6291-42fb-9fd8-4e26ddd32885/GFf6OrZCT2.json"
        background="transparent"
        speed="1"
        style={{ width: "500px", height: "500px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Error;
