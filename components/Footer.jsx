import React from 'react'

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col items-center justify-between bg-[#f2c311] text-black lg:py-4 py-2 lg:px-6 text-center font-semibold text-sm lg:gap-0 gap-2">
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