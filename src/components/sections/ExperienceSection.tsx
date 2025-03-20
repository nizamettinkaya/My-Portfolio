import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer ',
    company: 'Swipejobb AB',
    location: 'Malmö, Sweden',
    period: 'Dec 2023 - July 2024',
    description: [
      'Develop frontend components using JavaScript, React, and Tailwind CSS.',
      'Optimize components for maximum performance across different devices and browsers.',
      'Contribute to the entire application lifecycle, focusing on coding and debugging.',
      'Troubleshoot and debug applications.',
      'Collaborate with cross-functional teams to define, design, and deliver new features.'
    ],
    type: 'work'
  },
  {
    id: 2,
    title: 'ServiceNow System Administrator – Hybrid Professionals Program',
    company: 'ServiceNow.',
    location: 'England, UK',
    period: 'Seb 2023 - Dec 2023',
    description: [
      'Innovative training model for ServiceNow platform.',
      'Covers integration of cloud-based and on-premises systems.',
      'Teaches management of hybrid ServiceNow environments.',
      'Provides hands-on experience with ServiceNow platform.',
      'Focuses on developing tailored organizational solutions.',
      'Includes training in cloud application development.',
      'Covers configuration and optimization of ServiceNow systems.'
    ],
    type: 'education'
  },
  {
    id: 3,
    title: 'Full Stack Development',
    company: 'Clarusway IT School',
    location: 'USA',
    period: 'March 2021 - Dec 2021',
    description: [
      'Intensive full-time program in computer science and software development.',
      'Covered web development using modern technologies.',
      'Gained expertise in Python, JavaScript, and React.js.',
      'Learned backend development with Django and SQL.',
      'Developed frontend skills with HTML, CSS, and Bootstrap.',
      'Worked with SaaS, Linux, Git, and GitHub.',
      'Applied Agile methodology in software projects.',
      'Built and deployed a Full Stack Capstone project.'
    ],
    type: 'education'
  },
  {
    id: 4,
    title: 'Bachelor’s Degree in Technical Education',
    company: 'Marmara University',
    location: 'Istanbul, Turkey',
    period: ' 2005 - 2010',
    description: [
      'Studied Pascal programming language.',
      'Took courses in technical drawing and design.',
      'Gained experience with AutoCAD and SolidWorks.',
      'Completed practical workshops on industrial applications.',
      'Studied manufacturing processes and materials technology.',
      'Developed problem-solving skills through hands-on projects.'
      
    ],
    type: 'education'
  }
];

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

// Timeline item component
const TimelineItem = ({ item }: { item: typeof experiences[0] }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 mb-8 ml-4"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-700"></div>

      {/* Circle */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 border-2 border-white dark:border-gray-900"></div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
        <div className="flex flex-wrap items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300">
            {item.type === 'work' ? 'Work' : 'Education'}
          </span>
        </div>

        <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
          {item.company}
        </h4>

        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center mr-4 mb-2">
            <FiCalendar className="mr-1" size={14} />
            <span>{item.period}</span>
          </div>
          <div className="flex items-center mb-2">
            <FiMapPin className="mr-1" size={14} />
            <span>{item.location}</span>
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-1">
          {item.description.map((desc, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === filter);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              My <span className="text-primary-600 dark:text-primary-400">Experience</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey, including work experience and educational background.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                filter === 'work'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiBriefcase className="mr-1" size={14} />
              Work
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                filter === 'education'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiBook className="mr-1" size={14} />
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredExperiences.map((exp) => (
              <TimelineItem key={exp.id} item={exp} />
            ))}
          </motion.div>
        </div>

        {/* Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md shadow-md hover:bg-primary-700 transition-colors duration-300"
          >
            Download Full Resume
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
