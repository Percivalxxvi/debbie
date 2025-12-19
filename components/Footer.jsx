import React from 'react'

const Footer = () => {
  return (
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
  );
}

export default Footer