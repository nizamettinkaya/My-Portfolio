import { motion } from 'framer-motion';
import { FiTool, FiSettings, FiUsers, FiShield, FiCpu, FiDatabase } from 'react-icons/fi';
import ServiceNow from '../../assets/ServiceNow.webp';

const serviceNowModules = [
  {
    icon: <FiTool className="w-6 h-6" />,
    title: 'Incident Management',
    description: 'Streamlined incident resolution processes, reducing average resolution time by 35% and improving customer satisfaction scores.'
  },
  {
    icon: <FiSettings className="w-6 h-6" />,
    title: 'Service Catalog',
    description: 'Designed and implemented intuitive service catalogs with automated workflows, improving service request fulfillment efficiency.'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Knowledge Management',
    description: 'Established robust knowledge base systems to improve self-service capabilities and reduce repeat incidents.'
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Change Management',
    description: 'Implemented change management processes that reduced failed changes by 40% and improved system reliability.'
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'Performance Analytics',
    description: 'Leveraged ServiceNow Performance Analytics to provide actionable insights and improve IT service delivery metrics.'
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: 'CMDB Management',
    description: 'Maintained accurate Configuration Management Database (CMDB) ensuring proper asset tracking and configuration management.'
  }
];

const ServiceNowCard = ({ module, index }: { module: typeof serviceNowModules[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-primary-600 dark:text-primary-400 mb-4">
        {module.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{module.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
    </motion.div>
  );
};

export default function ServiceNowSection() {
  return (
    <section id="servicenow" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              ServiceNow <span className="text-primary-600 dark:text-primary-400">Expertise</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As a certified ServiceNow Administrator, I specialize in implementing and optimizing
              ServiceNow instances to streamline IT operations and enhance service delivery.
            </p>
          </motion.div>
        </div>

        {/* ServiceNow Platform Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/5">
                <img
                  src={ServiceNow}
                  alt="ServiceNow Platform"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Platform Administration
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I have extensive experience in administering the ServiceNow platform, including system configuration,
                  user management, and role-based access control. My expertise encompasses:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Instance configuration and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">UI policies, client scripts, and business rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Workflow automation and process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Integration with third-party systems and APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Performance tuning and optimization</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300">
                    ServiceNow Admin
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    ITSM
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    Workflow
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                    Scripting
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ServiceNow Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceNowModules.map((module, index) => (
            <ServiceNowCard key={index} module={module} index={index} />
          ))}
        </div>

        {/* ServiceNow Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md shadow-md hover:bg-primary-700 transition-colors duration-300"
          >
            View ServiceNow Projects
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
