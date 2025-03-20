import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';

// Project data
const projects = [
  {
    id: 1,
    title: 'Recipe Finder',
    description: 'A recipe finder app that helps users discover new recipes based on ingredients they have at home.',
    image: '/uploads/1716394307173_image_2.png',
    tags: ['React', 'Redux', 'API Integration'],
    github: 'https://github.com/yourusername/recipe-finder',
    liveLink: 'https://recipe-finder.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, user authentication, payment processing, and admin dashboard.',
    image: 'https://same-assets.com/project1.webp',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    liveLink: 'https://ecommerce-platform.example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    image: 'https://same-assets.com/project2.webp',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/task-management-app',
    liveLink: 'https://task-app.example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time updates, 7-day forecasts, and location-based weather information.',
    image: 'https://same-assets.com/project3.webp',
    tags: ['JavaScript', 'APIs', 'CSS', 'HTML'],
    github: 'https://github.com/yourusername/weather-dashboard',
    liveLink: 'https://weather-app.example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
    image: 'https://same-assets.com/project5.webp',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://myportfolio.example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Music Streaming App',
    description: 'A music streaming application with playlist creation, user authentication, and audio visualization.',
    image: 'https://same-assets.com/project6.webp',
    tags: ['React', 'Node.js', 'MongoDB', 'WebAudio API'],
    github: 'https://github.com/yourusername/music-app',
    liveLink: 'https://music-stream.example.com',
    featured: false,
  },
];

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Project card component
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-0 right-0 p-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-gray-700 text-white p-2 rounded-full hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors duration-300"
              aria-label="GitHub Repository"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-gray-700 text-white p-2 rounded-full hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors duration-300"
              aria-label="Live Project"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
        >
          View Project
          <FiChevronRight className="ml-1" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              My <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects. Each project is unique and
              showcases different skills and technologies.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === 'featured'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/nizamettinkaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md shadow-md hover:bg-primary-700 transition-colors duration-300"
          >
            View More on GitHub
            <FiGithub className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
