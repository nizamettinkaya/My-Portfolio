import { motion } from 'framer-motion';
import ServiceNowFlowDesignerSimple from '../ServiceNowFlow/ServiceNowFlowDesignerSimple';

export default function ServiceNowDemoSection() {
  return (
    <section id="servicenow-demo" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
              ServiceNow <span className="text-primary-600 dark:text-primary-400">Workflows</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience an interactive simulation of ServiceNow's Flow Designer. This demo showcases
              a complex hospital appointment approval workflow with multiple stakeholders.
            </p>
          </motion.div>
        </div>

        <ServiceNowFlowDesignerSimple />
      </div>
    </section>
  );
}
