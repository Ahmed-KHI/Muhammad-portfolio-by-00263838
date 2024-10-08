import { manrope } from "lib/util/get-class";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const Hero = (_props: Props) => {
  return (
    <div className="text-secondary-white mb-20">
      <div className={clsx(manrope, "space-y-12", "text-hero-primary-para")}>
        <p className="leading-normal tracking-wide">
          <span className="text-4xl">Hi</span> there! My name is{" "}
          <span style={{ fontWeight: 700 }}>Muhammad</span>, and welcome to my
          portfolio website. I am a full-stack web developer from Pakistan and I am
          passionate about creating web applications that are both functional
          and user-friendly.
        </p>
        <p className="leading-normal tracking-wide">
          In my experience as a developer, I have found that simplicity is key
          to creating a great user experience. Whether it&apos;s through a clean
          and intuitive design, or by ensuring that the code behind the scenes
          is efficient and well-structured, I always strive to create web
          applications that are a pleasure to use.
        </p>
        <div className="w-full">
          <Image
            src="/assets/hero-main.jpg"
            className={clsx(
              "select-none",
              "rounded-md",
              "aspect-auto",
              "grayscale-0"
            )}
            width={1000}
            height={1000}
            alt="main-image"
            draggable="false"
            quality={100}
          />
          <p className="mt-1 text-center">
            <span className={"text-stone-500 text-sm"}>Nothing can bring you happiness but yourself 😁</span>{" "}
          </p>
        </div>
        <p className="leading-normal tracking-wide">
          I am currently seeking internship opportunities as a front-end
          developer. If you have any inquiries or would like to discuss
          potential opportunities, please don&apos;t hesitate to reach out.
          Thank you for visiting my portfolio website, and I look forward to
          connecting with you.
        </p>
      </div>
    </div>
  );
};

export default Hero;