"use client";

import Image from "next/image";
import ProjectCardContent from "components/work/projects/ProjectCardContent";
import { motion } from "framer-motion";
import { Project, ProjectType } from "types/project";
import { useState } from "react";
import clsx from "clsx";

const ProjectCard = ({ projectList }: { projectList: ProjectType[] }) => {
  // Initialize an array of loading states for each project
  const [loadingStates, setLoadingStates] = useState<boolean[]>(Array(projectList.length).fill(true));

  const handleLoadingComplete = (index: number) => {
    // Update the loading state for the specific project
    setLoadingStates((prev) => {
      const newLoadingStates = [...prev];
      newLoadingStates[index] = false;
      return newLoadingStates;
    });
  };

  return (
    <div className="space-y-4 grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 md:grid-cols-1">
      {projectList.map((project, index) => (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          key={project.id}
          className="rounded-lg"
        >
          <div className="flex flex-col justify-between md:items-center md:flex-row gap-6 rounded-lg shadow-md bg-secondary-black border border-primary-card-border transition-all duration-300 hover:backdrop-blur-sm hover:border-hover-card-border">
            {/* PROJECT IMAGE */}
            <Image
              src={`/assets/project-preview/${project.logoImage}.png`}
              alt={`${project.name} image`}
              width={800}
              height={400}
              className={clsx(
                "select-none rounded-t-lg md:rounded-l-lg md:rounded-r-none md:w-64",
                loadingStates[index] ? "grayscale blur-2xl scale-105" : "grayscale-0 blur-0 scale-100"
              )}
              draggable="false"
              onLoad={() => handleLoadingComplete(index)}
            />

            {/* PROJECT CONTENT */}
            <ProjectCardContent
              name={project.name}
              description={project.description}
              tags={project.tags}
              githubUrl="https://github.com/Ahmed-KHI/11_bmi_calculator-by-00263838.git" // Your GitHub URL
              vercelUrl="https://11-bmi-calculator-by-00263838.vercel.app/" // Your Vercel URL
            />
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default ProjectCard;
