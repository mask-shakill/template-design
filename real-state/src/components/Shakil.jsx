// src/Shakil.jsx
import React from "react";
import html2canvas from "html2canvas";
import Img from "../../public/temp1.jpg";
const Shakil = () => {
  const captureScreenshot = () => {
    const element = document.getElementById("capture");

    // Calculate the scale factor to achieve 2K width (2048px)
    const scale = 2048 / element.offsetWidth;

    html2canvas(element, { scale }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "screenshot.png";
      link.click();
    });
  };

  return (
    <div className="p-6">
      <div id="capture" className="p-4 text-white">
        <img
          src={Img}
          className="w-full h-auto" // Ensure image scales properly
        />
        <h1 className="text-2xl">Hello, Tailwind CSS!</h1>
        <p>This is the content to capture.</p>
      </div>
      <button
        onClick={captureScreenshot}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Capture Screenshot
      </button>
    </div>
  );
};

export default Shakil;
