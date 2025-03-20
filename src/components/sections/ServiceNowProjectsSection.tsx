import { motion } from 'framer-motion';
import ServiceNowProject from '../ServiceNowProject';


export default function ServiceNowProjectsSection() {
  const serviceNowProjects = [
    {
      title: "Enterprise ITSM Transformation",
      description: "I worked on this project to improve my skills and learn how to use ServiceNow ITSM. I created my own scenarios instead of working for a real company.",
      image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-what-is-pages/itsm-processes.sm.jpg",
      challenges: [
        "Explored ServiceNow ITSM modules (Incident, Problem, Change Management).",
        "Created simple workflows to automate processes.",
        "Set up a basic Knowledge Base in ServiceNow.",
        "Tested basic integrations and automatic ticket creation."
      ],
      solutions: [
        "Explored ServiceNow ITSM modules and practiced creating incidents, problems, and changes.",
        "Designed simple workflows to automate repetitive tasks.",
        "Set up a basic Knowledge Base for self-service solutions.",
        "Tested basic integrations for automatic ticket creation."
      ],
      results: [
        "Built a basic ITSM process on ServiceNow.",
        "Gained a better understanding of workflows and automation.",
        "Learned how ticket management works."
        
      ],
      technologies: ["ServiceNow ITSM", "Performance Analytics", "Service Catalog", "Workflow Editor"],
      link: "#"
    },
    {
      title: "IT Asset Management System",
      description: "In this project, I focused on learning ServiceNow IT Asset Management (ITAM). I worked with self-created scenarios.",
      image: "https://store-images.s-microsoft.com/image/apps.23621.ea949f51-0fa5-4cfc-9770-63bbf21146dd.7ed36945-bde4-4c14-8ff4-623479fe14ab.3556743b-6914-4c26-933a-c657f1d321e5",
      challenges: [
        "Created a simple Configuration Management Database (CMDB) in ServiceNow.",
        "Set up basic tracking for hardware and software assets.",
        "Practiced adding, updating, and managing assets.",
        "Experimented with automated workflows for asset management."
      ],
      solutions: [
        "Created a simple Configuration Management Database (CMDB) in ServiceNow.",
        "Practiced adding and updating assets manually.",
        "Set up workflows to automate asset request and approval processes.",
        "Explored software asset management and license tracking."
      ],
      results: [
        "Learned the basic concepts of IT asset management.",
        "Understood how CMDB works and why it’s important.",
        "Built a simple asset management system in ServiceNow."
        
      ],
      technologies: ["ServiceNow ITAM", "CMDB", "Discovery", "Software Asset Management"],
      link: "#",
      reverse: true
    },
    {
      title: "Service Portal Modernization",
      description: "In this project, I explored how to use the ServiceNow Service Portal. My goal was to create a more user-friendly interface.",
      image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-screenshots/imapct-benefit-4.sm.jpg",
      challenges: [
        "Built a simple self-service portal in ServiceNow.",
        "Tested form submissions and Knowledge Base usage.",
        "Tried to create a mobile-friendly interface.",
        "Made small design changes to improve user experience."
      ],
      solutions: [
        "Built a simple self-service portal in ServiceNow with basic request forms.",
        "Tested Knowledge Base integration to help users find solutions easily.",
        "Practiced designing a mobile-friendly layout.",
        "Experimented with UI/UX improvements for better usability."
      ],
      results: [
        "Learned the basics of ServiceNow Service Portal.",
        "Practiced working with forms and workflows.",
        "Made small improvements for a better user experience."
        
      ],
      technologies: ["ServiceNow Service Portal", "Knowledge Management", "Service Catalog", "CMS"],
      link: "#"
    }
  ];

  return (
    <section id="servicenow-projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              ServiceNow <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Below are some of the key ServiceNow implementation projects I've successfully delivered,
              showcasing my ability to solve complex business challenges through effective ServiceNow solutions.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {serviceNowProjects.map((project, index) => (
            <ServiceNowProject
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              challenges={project.challenges}
              solutions={project.solutions}
              results={project.results}
              technologies={project.technologies}
              link={project.link}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
