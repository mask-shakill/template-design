// src/App.js
import React from "react";
import html2canvas from "html2canvas";

const Demo = () => {
  const captureScreenshot = () => {
    const element = document.getElementById("capture");

    // Set the scale factor to achieve the desired width in pixels
    const scale = 1080 / element.offsetWidth;

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
      <div id="capture" className="p-4 bg-blue-500 text-white">
        <img
          src="https://via.placeholder.com/800"
          alt="Placeholder"
          className="w-full"
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

export default Demo;
