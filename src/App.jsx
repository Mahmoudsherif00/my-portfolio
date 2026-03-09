import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, 
  Brain, Eye, Database, Puzzle, MessageCircle, Briefcase, 
  Terminal, Cpu, Users, Zap, Menu, X, FileText, Activity, Layers, 
  GitGraph, Server, BarChart3, Network, Phone, MapPin, 
  CheckCircle, Quote, Star, Filter, Trophy
} from 'lucide-react';

import myPhoto from './assets/My-photo.png';
// --- DATA SECTION ---

const personalInfo = {
  name: "Mahmoud sherif ",
  title: "AI Engineer & Data Scientist",
  slogan: "Smart Analytics for Smarter Moves.",
  valueProposition: "I am an AI developer who transforms research ideas into practical software solutions. I specialize in designing and deploying scalable AI systems that combine machine learning, software engineering, and performance optimization to deliver real impact.",
  email: "mahmoudsherif8002@gmail.com",
  phone: "+20 01013765365", // أضف رقم هاتفك هنا
  location: "Cairo, Egypt",
  github: "https://github.com/Mahmoudsherif00",
  linkedin: "https://www.linkedin.com/in/mahmoud-sherif0/",
  cvPath: "/src/assets/Mahmoud_Sherif CV.pdf",
  photo: myPhoto
};

// 1. SERVICES DATA
const services = [
  {
    title: "AI Model Development",
    desc: "Building and training custom Machine Learning & Deep Learning models tailored to your business needs.",
    icon: <Brain size={32} />
  },
 
  {
    title: "Data Science & Analytics",
    desc: "Transforming raw data into actionable insights through EDA, visualization, and predictive modeling.",
    icon: <BarChart3 size={32} />
  },
  {
    title: "Software Development",
    desc: "Back end development with .NET and C#.",
    icon: <Network size={32} /> 
  }
];

// 2. EDUCATION DATA
const education = [
  {
    degree: "Bachelor of Computer Science and Artificial Intelligence", 
    institution: "Ahram Canadian University",
    year: "2023 - 2027",
    desc: "Major in Artificial Intelligence. GPA: 3.59/4.0"
  },
  {
    degree: "Data Science Program",
    institution: "Digital Egypt Pioneers Initiative By MCIT",
    year: "2026",
    desc: [
      "Intensive training in Data Science foundations, including data analysis, data visualization, SQL databases, and Python-based workflows for extracting insights and building data-driven solutions.",
      "Hands-on experience in Machine Learning and applied Artificial Intelligence, focusing on model development, evaluation, and deployment using tools such as MLflow and Hugging Face.",
      "Completion of end-to-end projects and a capstone applying the full data science lifecycle—from problem definition and data preparation to model development and generating real-world business insights."
    ]
  },
  {
    degree: "Problem Solving Course – Level 2 (Official Certificate)",
    institution: "Coach Academy",
    year: "May 2025",
    desc: [
      "Complexity analysis and recursion",
      "Standard Template Libraries (STLs)",
      "Static range queries, two pointers & sliding window techniques",
      "Binary search, Recursive and iterative complete search (backtrack & bitmasks)",
      "Greedy algorithms, Number theory (Level I & II)"
    ]
  }
];

// 3. ACHIEVEMENTS DATA
const achievements = [
  
];

// 4. TESTIMONIALS DATA
const testimonials = [
  
];

// 5. PROJECTS DATA (With Categories)
const projects = [
  // {
  //   id: 1,
  //   title: "Smart Entrance Gate",
  //   category: "Embedded AI",
  //   challenge: "Integration of multiple biometric sensors on limited hardware resources.",
  //   result: "Achieved 99% uptime with <1s response time for face recognition.",
  //   tools: ["Python", "Django", "Face Recognition", "OpenCV", "Raspberry Pi"],
  //   description: "Built a multi-modal biometric access control system combining face recognition, fingerprint scanning, and RFID. Designed a reliable embedded architecture with asynchronous communication.",
  //   icon: <Eye size={32} />,
  //   githubLink: "https://github.com/MahamedKhaledSaad11/Smart_Entrance_Gate",
  //   demoLink: "https://drive.google.com/file/d/1tJ5ZBLZ-BkIpypTGbgq1i48K2lNjAeiW/view?usp=sharing"
  // },
  // {
  //   id: 2,
  //   title: "Hospital Management System",
  //   category: "Web Dev",
  //   challenge: "Synchronizing data between desktop and web platforms in real-time.",
  //   result: "Reduced appointment booking time by 40% and enabled 100% digital record access.",
  //   tools: ["Django", "SQLite", "Python", "Bootstrap", "JS","HTML5","CSS"],
  //   description: "Developed a dual-platform (Web + Desktop) system to enhance doctor-patient communication. Features include appointment scheduling, prescription management, and history tracking.",
  //   icon: <Activity size={32} />,
  //   githubLink: "https://github.com/MahamedKhaledSaad11/hospital-management-system",
  //   demoLink: "https://mohamedkhaledsaad.pythonanywhere.com/"
  // },
  // {
  //   id: 3,
  //   title: "Auto-ML Platform",
  //   category: "AI & Web",
  //   challenge: "Automating the complex pipeline of feature engineering and model selection.",
  //   result: "Empowered non-technical users to train models with 90%+ accuracy via a GUI.",
  //   tools: ["Flask", "Scikit-Learn", "Pandas", "NumPy","Matplotlib"],
  //   description: "Full-stack app allowing users to upload datasets, visualize EDA, and train models (Random Forest, SVM) without code. Automatically generates Python scripts for the user.",
  //   icon: <Brain size={32} />,
  //   githubLink: 'https://github.com/MahamedKhaledSaad11/Auto-ML',
  //   demoLink: "https://momosaad11.pythonanywhere.com/"
  // },
];

const experienceData = [
  {
    type: "Instructor",
    role: "Computer Science Instructor",
    company: "Creative Children Community - Cairo, Egypt",
    date: "July 2024 - Present",
    description: [
      "Awarded for excellence in teaching coding to children, covering HTML, CSS, and Python programming language as Instructor of the Month (Link).",
      "Delivered 300+ engaging lectures and discussion-based sessions, promoting active learning and critical thinking.",
      "Demonstrated programming concepts and problem-solving techniques.",
      "Provided guidance and feedback to students on their assignments and projects.",
      "Conducted hands-on labs and coding exercises."
    ]
  },
  {
    type: "Internship",
    role: "Backend Developer Intern",
    company: "Microsystem Cloud Business Solutions - Cairo, Egypt",
    date: "June 2025 - August 2025",
    description: [
      "Developed and maintained backend applications using C#, applying OOP and SOLID principles, and implementing design patterns like Repository, Factory, and Singleton, resulting in 30% faster code maintainability and reduced system errors.",
      "Designed and managed relational databases, writing efficient SQL queries that improved data retrieval speed by 25% and ensured 99% data accuracy across applications."
    ]
  },
  {
    type: "Trainee",
    role: "Computer Science Instructor Trainee",
    company: "Creative Children Community - Cairo, Egypt",
    date: "May 2024 – July 2024",
    description: [
      "Developed engaging programming lessons and hands-on coding labs that motivated students and sparked their interest.",
      "Effectively explained technical concepts to students and parents, receiving consistently excellent reviews and high assignment marks.",
      "Earned recognition for performance, leading to a contract extension and an expanded role within the company."
    ]
  }
];

const skills = {
  technical: [
    { category: "Programming", items: ["Python", "C++", "C#"], icon: <Terminal size={20} /> },
    // { category: "Machine Learning", items: ["Supervised/Unsupervised", "Clustering", "Scikit-learn"], icon: <Brain size={20} /> },
    // { category: "Deep Learning", items: ["CNN", "ANN", "TensorFlow", "Keras", "PyTorch"], icon: <Layers size={20} /> },
    // { category: "Computer Vision", items: ["Object Detection", "Segmentation", "OpenCV", "YOLO"], icon: <Eye size={20} /> },
    { category: "Software Engineering", items: ["Object-Oriented Programming", "Agile Development", "System Design"], icon: <Eye size={20} /> },
    { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Jupyter Notebook","pyplot"], icon: <BarChart3 size={20} /> },
    // { category: "Embedded Systems", items: ["Raspberry Pi", "Arduino", "ESP32"], icon: <Cpu size={20} /> },
    { category: "Web Tools", items: [".NET", "HTML", "CSS", "Git"], icon: <Network size={20} /> },
  ]
};

// --- COMPONENTS ---

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Mahmoud Sherif
            </span>
          </div>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  activeSection === link.id ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-blue-300'
                } transition-colors duration-200 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-900"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ id }) => (
  <section id={id} className="min-h-screen flex items-center justify-center pt-16 bg-slate-950 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

    <div className="max-w-6xl mx-auto px-4 w-full z-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-lg md:text-xl text-blue-400 font-medium tracking-wide uppercase">AI Engineer & Data Scientist</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-2xl text-slate-300 font-light italic border-l-4 border-blue-500 pl-4">
            "{personalInfo.slogan}"
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-600/30">
              Hire Me
            </a>
            <a href={personalInfo.cvPath} download className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold border border-slate-700 transition-all flex items-center gap-2">
              <FileText size={18} /> Download CV
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative">
           <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
            <img src={personalInfo.photo} alt={personalInfo.name} className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = ({ id }) => (
  <section id={id} className="py-20 bg-slate-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
      <p className="text-xl text-slate-300 leading-relaxed mb-12">
        {personalInfo.valueProposition}
      </p>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
            <p className="text-slate-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = ({ id }) => (
  <section id={id} className="py-20 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 md:gap-8 items-start">
            <div className="flex-col items-center hidden md:flex">
              <div className="w-4 h-4 rounded-full bg-blue-500 mt-2"></div>
              <div className="w-0.5 h-full bg-slate-800 my-2"></div>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex-1 hover:bg-slate-800 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <span className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">{edu.year}</span>
              </div>
              <h4 className="text-lg text-slate-300 mb-2">{edu.institution}</h4>
<ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
  {Array.isArray(edu.desc) ? (
    edu.desc.map((point, i) => <li key={i}>{point}</li>)
  ) : (
    <li>{edu.desc}</li>
  )}
</ul>            </div>
          </div>
        ))}
      </div>
      
      {/* Achievements Mini-Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Trophy className="text-yellow-500" /> Honors & Awards
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-xl border-l-4 border-yellow-500">
              <h4 className="text-white font-bold">{ach.title}</h4>
              <p className="text-slate-400 text-sm mt-1">{ach.provider} | {ach.year}</p>
              <p className="text-slate-500 text-xs mt-2">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = ({ id }) => (
  <section id={id} className="py-20 bg-slate-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.technical.map((tech, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4 text-blue-400">
              {tech.icon}
              <h4 className="ml-3 text-lg font-semibold text-white">{tech.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.items.map((item, i) => (
                <span key={i} className="px-2 py-1 text-xs text-slate-300 bg-slate-900 rounded border border-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = ({ id }) => (
  <section id={id} className="py-20 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border-l-4 border-blue-500">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <span className="text-sm text-slate-400">{item.date}</span>
            </div>
            <h4 className="text-blue-400 mb-4">{item.company} | {item.type}</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
              {item.description.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- PROJECTS SECTION WITH FILTERING ---
const Projects = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // استخراج التصنيفات الفريدة من المشاريع
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id={id} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="grid gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 flex flex-col lg:flex-row gap-8 hover:border-blue-500/50 transition-all">
              {/* Project Visual/Icon */}
              <div className="lg:w-1/4 flex flex-col items-center justify-center bg-slate-900/50 rounded-xl p-8 border border-slate-700/50">
                 <div className="text-blue-500 mb-4">{project.icon}</div>
                 <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">{project.category}</span>
              </div>

              {/* Project Details */}
              <div className="lg:w-3/4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.githubLink !== "#" && <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github size={20}/></a>}
                      {project.demoLink !== "#" && <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300"><ExternalLink size={20}/></a>}
                    </div>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-4">{project.role}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-900/50 p-3 rounded-lg">
                      <p className="text-xs text-red-400 font-bold mb-1">CHALLENGE</p>
                      <p className="text-slate-300 text-sm">{project.challenge}</p>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded-lg">
                      <p className="text-xs text-green-400 font-bold mb-1">RESULT</p>
                      <p className="text-slate-300 text-sm">{project.result}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-slate-900 text-slate-300 rounded border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-20 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <Quote className="absolute top-4 left-4 text-slate-700 opacity-50" size={40} />
            <p className="text-slate-300 italic mb-6 relative z-10">"{t.text}"</p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {t.name[0]}
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                <p className="text-slate-500 text-xs">{t.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = ({ id }) => (
  <section id={id} className="py-20 bg-slate-900 border-t border-slate-800">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
      <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
        I am currently available for freelance projects and full-time engineering roles. 
        Let's discuss how AI can transform your business.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="flex items-center gap-3 text-slate-300">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
            <Phone size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs text-slate-500">Call Me</p>
            <p className="font-semibold">{personalInfo.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-slate-300">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-green-400">
            <Mail size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs text-slate-500">Email Me</p>
            <a href={`mailto:${personalInfo.email}`} className="font-semibold hover:text-white">{personalInfo.email}</a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-red-400">
            <MapPin size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs text-slate-500">Location</p>
            <p className="font-semibold">{personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <a href={personalInfo.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={28} /></a>
        <a href={personalInfo.github} className="text-slate-400 hover:text-white transition-colors"><Github size={28} /></a>
      </div>
      
      <p className="text-slate-600 mt-12 text-sm">© 2026 {personalInfo.name}. All rights reserved.</p>
    </div>
  </section>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-blue-500 selection:text-white">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Education id="education" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Testimonials />
        <Contact id="contact" />
      </main>
    </div>
  );
};

export default App;