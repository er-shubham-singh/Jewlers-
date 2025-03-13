import React, { useState } from "react";
import Card1 from "../../assets/data/card1.png";
import Card2 from "../../assets/data/card2.png";
import Image1 from "../../assets/data/image1.jpg"
import Image2 from "../../assets/data/image2.png"

const Wedding = () => {
  const [search, setSearch] = useState("");
  const communities = [
    "Telugu Bride", "Gujarati Bride", "Tamil Bride", "Marathi Bride",
    "Bengali Bride", "Punjabi Bride", "UP Bride", "Bihari Bride",
    "Kannadiga Bride", "Marwari Bride", "Odia Bride", "Muslim Bride"
  ];

  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-6 ">
      <h2 className="text-2xl font-semibold text-red-900 mb-4">
        For a sparkling new beginning
      </h2>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Find my community"
          className="border border-red-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-3 top-2.5 text-red-500">🔍</span>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {filteredCommunities.map((community, index) => (
          <button
            key={index}
            className="border border-red-400 text-red-800 px-4 py-2 rounded-full hover:bg-red-100"
          >
            {community}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-4">
        {[Card1, Card1, Card1].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt=""
              className="w-80 h-auto"
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 py-10">
        {[Card2, Card2, Card2, Card2].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt=""
              className="w-60 h-auto transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mb-10">
        <p className="text-3xl py-4">Featured Collections</p>
        <img src={Image1} alt="" />
      </div>

      <div className="flex flex-col items-center">
        <img src={Image2} alt="" />
      </div>
    </div>
  );
};

export default Wedding;
