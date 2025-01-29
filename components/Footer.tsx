import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready to take <span className="text-purple">your</span>{" "}
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:drwinner03@gmail.com">
          <MagicButton
            title="Let us connect!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center">
        {/* Centered and padded "Connect with Me" header */}
        <h2 className="text-xl font-bold text-white text-center py-4">
          Connect with Me
        </h2>
        <p className="text-white-200 mt-2 text-center">
          Let&apos;s collaborate and build something amazing together. Reach out
          through any of the platforms below:
        </p>
      </div>

      {/* Move social media icons to a new line */}
      <div className="w-full flex justify-center mt-4">
        <div className="socials-container flex items-center gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt={info.alt} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-white-200 md:text-base text-sm md:font-normal font-light">
          Bridging the future with cutting-edge technology, smart contract
          solutions, and AI-driven innovations. Join me on this journey to build
          a smarter, more decentralized world.
        </p>
        <p className="md:text-base text-sm md:font-normal font-light mt-4">
          &copy; {currentYear} Richard Winner Duvor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
