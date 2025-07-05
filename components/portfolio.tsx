"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  const experiences = [
    {
      title: "Jr.Node.js Developer",
      company: "Kickr Technology",
      period: "Nov 2024 - July 2025",
      description:
        "Built scalable backend systems, designed efficient APIs, and implemented Role-Based Access Control (RBAC) system with granular permissions.",
      tech: ["Node.js", "MongoDB", "Express", "WebSockets"],
    },
    {
      title: "Backend Development Intern",
      company: "College Counsel",
      period: "Aug 2024 - Oct 2024",
      description:
        "Developed robust backend systems with RESTful APIs and secure application workflows using Next.js and MongoDB.",
      tech: ["Next.js", "Node.js", "MongoDB", "Express"],
    },
  ];

  const projects = [
    {
      title: "Ludo Game Admin Panel",
      description:
        "Built frontend admin panel and backend APIs for multiplayer Ludo game platform with real-time gameplay and RBAC.",
      tech: ["React", "Node.js", "Express", "Colyseus.js", "MongoDB", "RBAC"],
      link: "https://adminludo.kickrtech.in/",
      featured: true,
    },
    {
      title: "Document Editor",
      description:
        "Real-time collaborative document editor with multi-user support, autosave, and version control.",
      tech: ["Next.js", "WebSockets", "Tailwind", "Clerk", "Liveblocks"],
      link: "https://docs-rho-mocha.vercel.app/",
      featured: true,
    },
    {
      title: "URL Shortener",
      description:
        "Full-stack URL shortener with custom slug generation, click tracking, and monitoring capabilities.",
      tech: [
        "Next.js",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Prometheus",
      ],
      link: "https://url-shortner-lyea.onrender.com",
      featured: false,
    },
    {
      title: "Blog Application",
      description:
        "Full-stack blog app with user authentication, post management, and responsive UI.",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Tailwind"],
      link: "https://mern-blog-1iip.onrender.com/",
      featured: false,
    },
    {
      title: "Your Gynac Landing Page",
      description:
        "Responsive landing page with server-side rendering and clean, minimalistic design.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "http://yourgynac.com/",
      featured: false,
    },
    {
      title: "Static Landing Page",
      description:
        "A simple, responsive landing page built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://modern-react-app-mmom.vercel.app/",
      featured: false,
    },
  ];

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "C++",
    ],
    "Frameworks & Libraries": [
      "Node.js",
      "React.js",
      "Next.js",
      "Express",
      "Redux",
      "Prisma ORM",
    ],
    Databases: ["MongoDB", "PostgreSQL"],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "AWS EC2",
      "NGINX",
      "VS Code",
      "Linux",
    ],
    "Core Concepts": [
      "Data Structures & Algorithms",
      "Database Management",
      "RESTful APIs",
      "WebSockets",
    ],
  };

  // Mouse move effect for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 8,
          y: e.clientY - 8,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll("h1 span"), {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(heroRef.current.querySelector("p"), {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(heroRef.current.querySelectorAll("a"), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.from(heroRef.current.querySelectorAll("svg"), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Section title animations
    const sectionTitles = document.querySelectorAll("section[id] h2");
    sectionTitles.forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    // About section animations
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelectorAll("p"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(aboutRef.current.querySelectorAll(".ability-card"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
    }

    // Experience section animations
    if (experienceRef.current) {
      gsap.from(experienceRef.current.querySelectorAll(".experience-card"), {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Projects section animations
    if (projectsRef.current) {
      gsap.from(projectsRef.current.querySelectorAll(".project-card"), {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
    }

    // Skills section animations
    if (skillsRef.current) {
      gsap.from(skillsRef.current.querySelectorAll(".skill-card"), {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Contact section animations
    if (contactRef.current) {
      gsap.from(contactRef.current.querySelectorAll(".contact-item"), {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
    }

    // Navbar animation
    if (navRef.current) {
      gsap.from(navRef.current.querySelectorAll("a"), {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        delay: 1.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Scroll indicator animation
    if (heroRef.current) {
      const scrollIndicator =
        heroRef.current.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        gsap.to(scrollIndicator, {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }

    // Set up scroll triggers for active section detection
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(section.id);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate(-8px, -8px)" }}
      />

      {/* Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">M</span>ohd{" "}
              <span className="text-blue-600">S</span>aqib
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === link.link.slice(1)
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Full Stack</span>
              <br />
              <span className="text-blue-600 gradient-text">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crafting scalable web applications with the MERN stack.
              Specialized in backend optimization and real-time collaboration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/saqib001-github"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saqib001/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saqibmohd582@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack, currently pursuing BTech in Computer Science with a CGPA of
              7.9. I specialize in building scalable web applications with a
              focus on backend optimization and real-time collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Learner",
                description:
                  "Quickly adapts to new technologies and tools to stay ahead in development.",
                icon: "🚀",
              },
              {
                title: "Problem Solver",
                description:
                  "Efficiently identifies issues and crafts effective solutions in high-pressure situations.",
                icon: "🧩",
              },
              {
                title: "Team Player",
                description:
                  "Collaborates effectively within teams, contributing positively and supporting shared goals.",
                icon: "🤝",
              },
            ].map((ability, index) => (
              <div
                key={index}
                className="ability-card text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{ability.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{ability.title}</h3>
                <p className="text-gray-600">{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-gray-600">
              My professional journey and contributions
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Some of my recent work and side projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className="skill-card bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="contact-item flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <Phone size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 8171847981</p>
                </div>
              </div>

              <div className="contact-item flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <Mail size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">saqibmohd582@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Let's connect and build something amazing together!
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/saqib001-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/saqib001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:saqibmohd582@gmail.com"
                  className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Mohd Saqib. Built with Next and lots of ☕
          </p>
        </div>
      </footer>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
