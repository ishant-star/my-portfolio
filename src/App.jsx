import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { TypewriterText } from "./components/TypewriterText";
import { ParticleBackground } from "./components/ParticleBackground";
import { ContactForm } from "./components/ContactForm";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Java (Basics)",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "REST APIs"

];

const projects = [
  {
    name: "NOU Digital Learning and Assessment System",
    description: "Full-stack MERN application with secure authentication, course enrollment, interactive modules, and automated assessment system.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "https://nou-digital.vercel.app",
  },
  {
    name: "UberGo – Online Grocery Store",
    description: "E-commerce app inspired by BigBasket, built with MERN + Tailwind CSS, featuring product catalog, shopping cart, and Stripe payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    link: "https://ubergo.vercel.app",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website to showcase projects and skills with modern animations and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export default function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-red-600/30 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ishant Raj
            </motion.h1>
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ishant Raj
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-gray-300 mr-3">I'm a</span>
            <TypewriterText 
              texts={[
                "Full-Stack Developer",
                "MERN Stack Specialist", 
                "React Enthusiast",
                "Problem Solver"
              ]}
              speed={100}
              delay={2000}
            />
          </motion.div>

          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Passionate about creating scalable web applications and turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {[
              { icon: FaGithub, link: "https://github.com/ishant-star" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/ishant-raj-418429382/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-red-500 transition-all duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download="Ishant_Raj_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              
            >
              <FaFileDownload /> Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.1)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            I'm a motivated Computer Science undergraduate with a passion for building scalable web applications 
            using the MERN stack. I love turning complex problems into simple, beautiful solutions. When I'm not 
            coding, you'll find me exploring new technologies, reading novels, or watching anime. I believe in 
            continuous learning and am always excited to take on new challenges that push my boundaries.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border-2 border-red-600/30 p-6 rounded-xl text-center shadow-[0_0_20px_rgba(255,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:border-red-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,0,0.1)] hover:shadow-[0_0_40px_rgba(255,0,0,0.2)] transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-red-600/20 border border-red-600/40 rounded-full text-sm text-red-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about tech, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: FaEnvelope, text: "ishantraj.developer@gmail.com", href: "mailto:ishantraj.developer@gmail.com" },
                { icon: FaMapMarkerAlt, text: "India", href: "#" },
                { icon: FaPhone, text: "Available on request", href: "#" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg border border-red-600/20 hover:border-red-600/40 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <contact.icon className="text-red-500 text-xl" />
                  <span className="text-gray-300">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/30 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 mb-4">
              © {new Date().getFullYear()} Ishant Raj. Built with passion using React, Tailwind CSS & Framer Motion.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/ishant-star" target="_blank" rel="noreferrer" 
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/ishant-raj-418429382/" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}