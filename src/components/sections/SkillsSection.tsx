import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiServer, FiSettings, FiCheckCircle } from 'react-icons/fi';

// Skill data
const technicalSkills = [
  { name: 'ServiceNow Administration', percentage: 75 },
  { name: 'ITSM Best Practices', percentage: 70 },
  { name: 'Technical Support', percentage: 95 },
  { name: 'Incident Management', percentage: 90 },
  { name: 'IT Troubleshooting', percentage: 90 },
];

const developmentSkills = [
  { name: 'React Development', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Workflow Automation', percentage: 85 },
  { name: 'Python', percentage: 75 },
  { name: 'API Integration', percentage: 75 },
];

const otherSkills = [
  { icon: <FiLayout size={20} />, name: 'IT Service Desk' },
  { icon: <FiCode size={20} />, name: 'ServiceNow Scripting' },
  { icon: <FiDatabase size={20} />, name: 'IT Asset Management' },
  { icon: <FiServer size={20} />, name: 'System Administration' },
  { icon: <FiSettings size={20} />, name: 'Technical Documentation' },
  { icon: <FiCheckCircle size={20} />, name: 'Change Management' },
];

// Framer motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              My <span className="text-primary-600 dark:text-primary-400">Skills</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I've developed expertise in ServiceNow administration, IT service management,
              and technical support. My skills are focused on improving IT operations and service delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <FiServer size={24} />
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h3>
            </div>
            <div>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <FiCode size={24} />
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                Development Skills
              </h3>
            </div>
            <div>
              {developmentSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other Skills */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Additional Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={3 + index * 0.1}
                className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 mr-3 text-primary-600 dark:text-primary-400">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
