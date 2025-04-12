import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import NizamettinKaya from '../../assets/NizamettinKaya.png';

export default function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);

  // Simulating typing effect with JavaScript
  useEffect(() => {
    if (!typingRef.current) return;

    const roles = [
      "Full Stack Developer",
      "IT Technician",
      "ServiceNow Administrator",
      "Web Developer",
      "Technical Support Specialist",
      "System Administrator",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1500; // Pause at the end of typing
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
      }

      setTimeout(type, typingSpeed);
    };

    const typingTimeout = setTimeout(type, 1000);

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30 dark:opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-800 dark:text-primary-300 text-sm font-medium">
                {/* Full Stack Utvecklare  & ServiceNow Administrator */}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-heading leading-tight">
                Delivering <span className="text-primary-600 dark:text-primary-400">enterprise IT</span> solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                I'm a <span ref={typingRef} className="text-primary-600 dark:text-primary-400 font-semibold"></span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Get in Touch <FiArrowRight className="ml-2" />
                </motion.a>
                <motion.a
                  href="/Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline"
                >
                  Download CV <FiDownload className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="relative z-10 bg-gradient-to-br from-primary-500 to-primary-700 w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto overflow-hidden shadow-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img
                  src={NizamettinKaya}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover z-50"
                  
                />
                
              </motion.div>
              <h3>I'm Nizamettin Kaya</h3>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-4 w-24 h-24 bg-pink-400 rounded-lg opacity-70 dark:opacity-50 blur-xl" />
              <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-purple-400 rounded-lg opacity-70 dark:opacity-50 blur-xl" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-70 dark:opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
