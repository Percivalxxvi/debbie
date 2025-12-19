import React from "react";
const works = [
  {
    title: "Silent Prayers",
    excerpt: "A reflective piece on faith, silence, and hope.",
  },
  {
    title: "Echoes of Faith",
    excerpt: "Exploring belief through the lens of everyday struggles.",
  },
  {
    title: "Midnight Letters",
    excerpt: "Poetic letters written in moments of solitude.",
  },
  {
    title: "Why We Yawn",
    excerpt:
      "Yawning is a common reflex characterized by the jaw opening widely, a deep intake of air and a long exhale of air...",
  },
];

const Works = () => {
  return (
    <main className="bg-neutral-950 min-h-screen text-gray-100 px-6 py-20 select-none">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Written Works</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-400 text-sm h-18">{work.excerpt}</p>
              <button className="cursor-pointer text-sm text-black px-2 py-1 bg-[#f2c311] border border-[#f2c311] rounded-full hover:bg-black hover:border hover:text-[#f2c311]">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="flex lg:flex-row flex-col items-center justify-between bg-[#f2c311] text-black py-4 lg:px-6 text-center font-semibold text-sm">
        © {new Date().getFullYear()} Olamifeng · Nigeria · All Rights Reserved
        <h1 className="font-light">
          Powered by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://greylinex.vercel.app/"
            className="font-bold"
          >
            AOD Interactive
          </a>{" "}
        </h1>
      </footer>
    </main>
  );
};

export default Works;
