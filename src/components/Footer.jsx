import React from "react";
import { FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://t.me/Kiharu_05"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <FaTelegramPlane size={24} />
      </a>
      <a
        href="https://www.instagram.com/0.ooo.o.ooo.0/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.facebook.com/yourfacebookusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
    </footer>
  );
};

export default Footer;
