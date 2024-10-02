"use client";

import React, { Fragment } from "react";
import Project from "./projects/Project"; // Ensure this imports the updated Project component
import { manrope } from "lib/util/get-class";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {};

const categoryArray: Array<string> = ["Projects"];

const WorkCategory = (_props: Props) => {
  const [category, setCategory] = useState<string>("Projects");

  return (
    <>
      <div
        className={`text-lg flex gap-4 text-secondary-white ${manrope} mb-8 justify-center`}
      >
        {categoryArray.map((c, index) => (
          <Fragment key={index}>
            <p
              className={clsx(
                "text-primary-white",
                "cursor-pointer",
                "transition hover:text-secondary-white",
                "relative"
              )}
              onClick={() => setCategory(c)}
            >
              {c === category && (
                <motion.span
                  layoutId="underline-wc"
                  className={clsx(
                    "absolute left-0 top-full block",
                    "bg-primary-gray-highlighted",
                    "h-[2px] w-full"
                  )}
                />
              )}
              {c}
            </p>
            <span
              className={`select-none ${
                index === categoryArray.length - 1 ? "hidden" : "inline-block"
              }`}
            >
              •
            </span>
          </Fragment>
        ))}
      </div>
      {category === "Projects" && <Project />} {/* Ensure this points to your updated Project component */}
    </>
  );
};

export default WorkCategory;
