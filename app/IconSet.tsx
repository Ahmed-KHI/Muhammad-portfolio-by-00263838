"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaYoutube,
  FaFacebook, 

} from "react-icons/fa"; // Ensure you have the right import path
import { IconObjectType } from "types/icons";
import clsx from "clsx";
import React from "react";

// Icons array with type IconObjectType
export const icons: IconObjectType[] = [
  {
    component: FaGithub,
    href: "https://github.com/Ahmed-KHI",
    className:
      "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
  },
  {
    component: FaLinkedin,
    href: "https://www.linkedin.com/in/mirza-muhammad-ahmed-09b932209/",
    className: "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
  },
  {
    component: FaFacebook, // Add the Facebook icon
    href: "https://www.facebook.com/muhammad.ahmed.3914",
    className: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700",
  },
  {
    component: FaYoutube, // Change to YouTube icon
    href: "https://www.youtube.com/@MirzaMuhammadAhmed", // Corrected href to include https://
    className: "hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700", // Optional: You can customize this class
  },
  {
    component: FaEnvelope,
    href: "mailto:m.muhammad.ahmed115@gmail.com", // Added "mailto:"
    className: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
  },
  {
    component: FaFilePdf,
    href: "/resume",
    className:
      "hover:bg-gradient-to-r hover:from-emerald-500 hover:to-lime-600",
  },
];

const IconSet: React.FC = () => {
  return (
    <div className="flex gap-5 w-full">
      {icons.map((icon: IconObjectType, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, transition: { duration: 0 } }}
          key={index}
          className={clsx(
            "transition duration-300",
            "hover:bg-zinc-700 hover:shadow-blue-500/50",
            "text-xl text-[#e0e0e0] bg-zinc-800",
            "shadow-lg cursor-pointer p-1 rounded-md",
            icon.className
          )}
        >
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            <icon.component />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default IconSet;
