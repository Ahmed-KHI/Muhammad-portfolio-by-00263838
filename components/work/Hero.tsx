import { manrope } from "lib/util/get-class";
import React from "react";

type Props = {};

const Hero = (_props: Props) => {
  return (
    <div className="text-secondary-white mb-14 relative">
      <div className={`${manrope} space-y-12 text-hero-primary-para`}>
        <p className="leading-normal tracking-wide">
          <span className="text-3xl">Here</span>, you can find a collection of
          my projects which showcase my skills as a full-stack developer and
          demonstrate my ability to deliver functional and visually appealing
          web applications.
        </p>
        <p className="leading-normal tracking-wide">
          From simple static websites to complex web applications with dynamic
          functionality, I have experience working on a wide range of projects.
          I am always looking for new opportunities to learn and grow as a
          developer, and I am excited to continue building my portfolio with
          more challenging and rewarding projects in the future.
        </p>
      </div>

      <div className="hidden sm:block absolute opacity-20 right-0 blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-[200px] h-[200px] -z-10" />
    </div>
  );
};

export default Hero;