import React from "react";

const ProviderCard = ({ image, title, link, description, status, latency }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-blue-700">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img className="w-full shadow-lg" src={image} alt={title} />
      </a>
      <div className="px-6 py-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="font-bold text-xl mb-2 underline text-violet-800"
        >
          {title}
        </a>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-center mb-2 ">
        <div
          className={`p-2 rounded text-white text-xs font-bold ${
            status === "connected" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "connected" ? "Responsive" : "Unresponsive"}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-200">
        <p className="text-gray-700 text-center">Latency: {latency} ms</p>
      </div>
    </div>
  );
};

export default ProviderCard;
