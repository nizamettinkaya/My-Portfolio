import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 font-heading">
              NK<span className="text-gray-800 dark:text-white">Portfolio</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              A professional software developer passionate about creating beautiful, functional,
              and user-friendly applications. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">About</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Projects</a></li>
              <li><a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Experience</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Get in Touch</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:contact@yourname.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
                >
                  <FiMail className="mr-2" />
                  <span>dev.nkaya@hotmail.com</span>
                </a>
              </li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/nizamettinkaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/nizamettinkaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  {/* <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={20} />
                  </a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            © {currentYear} NKPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
