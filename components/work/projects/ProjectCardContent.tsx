import { FaGithub, FaLink } from "react-icons/fa";
import { manrope, poppins } from "lib/util/get-class";

interface PropType {
  name: string;
  description: string;
  tags: Array<string>;
  githubUrl: string; // Link to the GitHub repository
  vercelUrl?: string; // Link to the Vercel deployment
}

const ProjectCardContent = ({
  name,
  description,
  tags,
  githubUrl,
  vercelUrl,
}: PropType) => {
  return (
    <div className="mx-6 flex flex-col gap-4 sm:max-w-md max-w-2xl mb-6 md:mb-0">
      {/* NAME & URLs */}
      <div className="flex justify-between items-center">
        <p className={`${poppins} text-primary-white text-xl font-medium`}>
          {name}
        </p>
        <div className="flex gap-3 text-primary-white text-lg">
          <a
            target="_blank"
            rel="noreferrer"
            href={githubUrl}
            className="hover:shadow-lg hover:shadow-blue-500/50 p-1 rounded-md bg-divider hover:bg-primary-gray transition-all duration-300"
          >
            <FaGithub />
          </a>
          {vercelUrl && (
            <a
              target="_blank"
              rel="noreferrer"
              href={vercelUrl}
              className="hover:shadow-lg hover:shadow-blue-500/50 p-1 rounded-md bg-divider hover:bg-primary-gray transition-all duration-300"
            >
              <FaLink />
            </a>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className={`${manrope} text-secondary-white text-md`}>{description}</p>

      {/* TAGS */}
      <div className="gap-2 flex flex-wrap justify-start">
        {tags.map((tag, index) => (
          <span
            className="text-primary-gray bg-[#222222] transition-all hover:text-primary-gray-highlighted cursor-default select-none px-2 rounded-lg"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardContent;
