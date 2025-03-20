import { motion } from 'framer-motion';
import { FiUser, FiBook, FiBriefcase, FiCode, FiGlobe, FiCoffee } from 'react-icons/fi';
import pexels from "../../assets/pexels.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated IT professional specializing in technical support and ServiceNow administration.
              With expertise in IT service management and system administration, I help organizations
              streamline their IT operations and improve service delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={pexels}
                  alt="Professional portrait"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-200 dark:bg-primary-900/30 rounded-lg transform -translate-x-6 translate-y-6 -z-10"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm an IT Technician & ServiceNow Administrator with extensive experience in technical support,
                service desk management, and ITSM implementation. I specialize in configuring and managing
                ServiceNow instances, creating workflows, and ensuring smooth IT operations for organizations of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* About Info Grid */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiUser size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Role</h4>
                  <p className="font-medium text-gray-900 dark:text-white">IT Technician & ServiceNow Admin</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiBook size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Certification</h4>
                  <p className="font-medium text-gray-900 dark:text-white">ServiceNow Certified Admin</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiBriefcase size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="font-medium text-gray-900 dark:text-white">5+ Years</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiCode size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Specialization</h4>
                  <p className="font-medium text-gray-900 dark:text-white">ITSM & ServiceNow</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiGlobe size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Languages</h4>
                  <p className="font-medium text-gray-900 dark:text-white">English, Swedish</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <FiCoffee size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Interests</h4>
                  <p className="font-medium text-gray-900 dark:text-white">IT Automation, Problem Solving</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Let's work together
                <svg
                  className="ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
