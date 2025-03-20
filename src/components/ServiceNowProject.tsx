import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

interface ServiceNowProjectProps {
  title: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
  link?: string;
  reverse?: boolean;
}

export default function ServiceNowProject({
  title,
  description,
  image,
  challenges,
  solutions,
  results,
  technologies,
  link,
  reverse = false
}: ServiceNowProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 last:mb-0"
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start`}>
        {/* Project Image */}
        <div className="lg:w-2/5">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/5">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {description}
          </p>

          {/* Project Sections */}
          <div className="space-y-6">
            {/* Challenges */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Challenges
              </h4>
              <ul className="space-y-1">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-red-500 dark:text-red-400 flex-shrink-0 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Solutions
              </h4>
              <ul className="space-y-1">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1">
                      <FiCheckCircle size={16} />
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Results
              </h4>
              <ul className="space-y-1">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          {link && (
            <div className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                View Case Study
                <FiExternalLink className="ml-1" size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
