
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  BarChart3,
  Wrench,
  BrainCircuit,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const projects = [
  {
    name: "AgriLanka",
    type: "Full-Stack Development",
    description:
      "An agriculture marketplace platform designed to connect farmers and buyers, simplify product selling, and improve agricultural transportation.",
    technologies: ["Flutter", "Spring Boot", "PostgreSQL", "Supabase"],
    number: "01",
  },
  {
    number: "02",
    name: "GPA Calculator & Academic Planner",
    type: "Web Application",
    description:
      "Developed a web-based GPA Calculator to help university students calculate their GPA by adding subjects, credit values, and grades. Includes a GPA Planner that helps students set target GPAs and calculate the average GPA required in future semesters. Currently used by approximately 100 users.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Vercel",
    ],
  },
  {
    number: "03",
    name: "Expense Tracker",
    type: "Mobile Application",
    description:
      "A personal finance management app built with Flutter and Dart. It helps users track income, expenses and savings, manage transactions, view financial reports and set monthly budgets. Supports offline SQLite storage and Light/Dark themes.",
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Provider",
      "Material 3",
      "Custom Animations",
    ],

  },
  {
    name: "Data Science Projects",
    type: "Data Analytics & Machine Learning",
    description:
      "A collection of practical data analysis and machine learning projects exploring real-world datasets and meaningful insights.",
    technologies: ["Python", "Pandas", "NumPy"],
    number: "04",
  },
];


const skillCategories = [
  {
    title: "Programming Languages",
    description: "Languages I use to build applications and solve problems.",
    icon: Code2,
    skills: [
      { name: "Java", status: "Project Experience" },
      { name: "JavaScript", status: "Project Experience" },
      { name: "Dart", status: "Project Experience" },
      { name: "C#", status: "Basic" },
      { name: "TypeScript", status: "Learning" },
      { name: "Python", status: "Learning" },
    ],
  },
  {
    title: "Frontend & Mobile Development",
    description: "Building responsive web and mobile applications.",
    icon: Smartphone,
    skills: [
      { name: "HTML5", status: "Good Experience" },
      { name: "CSS3", status: "Good Experience" },
      { name: "Flutter", status: "Project Experience" },
      { name: "React", status: "Learning" },
      { name: "Next.js", status: "Learning" },
      { name: "Tailwind CSS", status: "Basic" },
    ],
  },
  {
    title: "Backend & API Development",
    description: "Developing server-side applications and APIs.",
    icon: Server,
    skills: [
      { name: "Spring Boot", status: "Project Experience" },
      { name: "REST API Development", status: "Project Experience" },
      { name: "API Integration", status: "Project Experience" },
      { name: "JWT Authentication", status: "Project Experience" },
      { name: "Node.js", status: "Learning" },
      { name: "Express.js", status: "Learning" },
      { name: ".NET", status: "Learning" },
      { name: "Microservices", status: "Learning" },
    ],
  },
  {
    title: "Databases & Cloud Services",
    description: "Working with databases and cloud platforms.",
    icon: Database,
    skills: [
      { name: "PostgreSQL", status: "Project Experience" },
      { name: "Firebase", status: "Project Experience" },
      { name: "Supabase", status: "Project Experience" },
      { name: "MySQL", status: "Basic Experience" },
    ],
  },
  {
    title: "Data Science & Analytics",
    description: "Exploring data analysis and machine learning.",
    icon: BarChart3,
    skills: [
      { name: "Pandas", status: "Learning" },
      { name: "NumPy", status: "Learning" },
      { name: "Matplotlib", status: "Learning" },
      { name: "Scikit-learn", status: "Learning" },
      { name: "Seaborn", status: "Learning" },
      { name: "Power BI", status: "Learning" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Development workflow, testing and deployment.",
    icon: Wrench,
    skills: [
      { name: "Git", status: "Project Experience" },
      { name: "GitHub", status: "Project Experience" },
      { name: "Postman", status: "Project Experience" },
      { name: "Vercel", status: "Project Experience" },
      { name: "Docker", status: "Learning" },
      { name: "Kubernetes", status: "Learning" },
    ],
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B14] text-slate-100">

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080B14]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Pasan<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-violet-400/50 px-5 py-2 text-sm text-violet-300 transition hover:bg-violet-500 hover:text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[5%] right-[-5%] h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Intro Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              <span className="text-xs font-medium tracking-wide text-violet-300 sm:text-sm">
                COMPUTER SCIENCE UNDERGRADUATE
              </span>
            </div>

            <p className="mb-4 text-lg text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
              Pasan
              <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-sky-400 bg-clip-text text-transparent">
                Madushanka.
              </span>
            </h1>

            <h2 className="mt-7 max-w-xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
              Building Digital Solutions
              <span className="text-violet-400"> Through Code </span>
              & Data.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              I&apos;m a Computer Science undergraduate at the University of Ruhuna,
              passionate about software engineering, full-stack development,
              and exploring data-driven solutions through technology.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-500/30"
              >
                Explore My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/10"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-5">
              <span className="text-sm text-slate-500">Connect with me</span>

              <a
                href="https://github.com/Pasan1113"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition duration-300 hover:scale-110 hover:text-white"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/pasan-madushanka/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition duration-300 hover:scale-110 hover:text-sky-400"
              >
                <FaLinkedin size={23} />
              </a>

              <a
                href="mailto:pasanmadu210@gmail.com"
                aria-label="Email"
                className="text-slate-400 transition duration-300 hover:scale-110 hover:text-violet-400"
              >
                <Mail size={23} />
              </a>
            </div>
          </motion.div>

          {/* Right Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-600/20 to-sky-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827]/90 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500">developer.tsx</span>
              </div>

              {/* Profile */}
              <div className="py-9 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-sky-500/20 shadow-lg shadow-violet-500/10">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-3xl border border-violet-400/30 shadow-lg shadow-violet-500/20">
                    <Image
                      src="public/profile.png"
                      alt="Pasan Madushanka - Software Developer"
                      width={112}
                      height={112}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Pasan Madushanka
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Undergraduate Software Developer
                </p>
                <p className="mt-2 text-xs text-violet-300">
                  University of Ruhuna
                </p>
              </div>

              {/* Code Style Details */}
              <div className="rounded-xl border border-white/10 bg-[#080B14] p-5 font-mono text-sm leading-8">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-sky-300">developer</span>{" "}
                  <span className="text-slate-400">= {"{"}</span>
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">focus</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-green-300">&quot;Software Engineering&quot;</span>,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">interest</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-green-300">&quot;Data Science&quot;</span>,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">mindset</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-green-300">&quot;Always Learning&quot;</span>
                </p>
                <p className="text-slate-400">{"}"}</p>
              </div>

              {/* Technology Highlights */}
              <div className="mt-7">
                <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500">
                  TECHNOLOGY INTERESTS
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Java", "Flutter", "Spring Boot", "Python", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-violet-400/15 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-300 transition duration-300 hover:border-violet-400/50 hover:bg-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -right-5 top-16 hidden rounded-2xl border border-sky-400/20 bg-[#111827] p-4 shadow-xl shadow-sky-500/10 sm:block">
              <Code2 size={25} className="text-sky-400" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-violet-400/20 bg-[#111827] p-4 shadow-xl shadow-violet-500/10 sm:block">
              <BrainCircuit size={25} className="text-violet-400" />
            </div>
          </motion.div>

        </div>
      </section>


      {/* About */}
      <section id="about" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            GET TO KNOW ME
          </p>
          <h2 className="mt-4 text-4xl font-bold">About Me</h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            I&apos;m a Computer Science undergraduate at the University of Ruhuna.
            I enjoy developing practical software applications and exploring
            how technology can solve real-world problems. My interests include
            full-stack development, mobile application development,
            data analytics, and machine learning.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <Code2 className="mb-4 text-violet-400" size={30} />
              <h3 className="text-xl font-semibold">Software Engineering</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Building web and mobile applications with practical
                development experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <BrainCircuit className="mb-4 text-sky-400" size={30} />
              <h3 className="text-xl font-semibold">Data Science</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Developing my knowledge in Python, data analytics,
                statistics, and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}


      <section id="skills" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            MY TOOLKIT
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            Technologies and tools I use to build software applications,
            develop APIs, manage databases and explore data-driven solutions.
          </p>

          {/* Experience Legend */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs">
            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Project Experience
            </span>

            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Currently Learning
            </span>
          </div>

          {/* Skill Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-2xl border border-white/10 bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10"
                >

                  {/* Category Icon and Title */}
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
                      <Icon size={25} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>

                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {category.skills.map((skill) => (

                      <span
                        key={skill.name}
                        title={skill.status}
                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-300 hover:scale-105 ${skill.status === "Learning"
                          ? "border-sky-400/20 bg-sky-400/10 text-sky-300 hover:border-sky-400/50"
                          : skill.status === "Basic" ||
                            skill.status === "Basic Experience"
                            ? "border-white/10 bg-white/5 text-slate-300 hover:border-white/30"
                            : "border-violet-400/20 bg-violet-500/10 text-violet-300 hover:border-violet-400/50"
                          }`}
                      >
                        {skill.name}
                      </span>

                    ))}

                  </div>

                  {/* Category Footer */}
                  <div className="mt-7 border-t border-white/10 pt-4">
                    <p className="text-xs text-slate-500">
                      {category.skills.length} Technologies
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>



      {/* Projects */}
      <section id="projects" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            SELECTED WORK
          </p>
          <h2 className="mt-4 text-4xl font-bold">Featured Projects</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className="rounded-2xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-1 hover:border-violet-400/50"
              >
                <p className="text-sm text-violet-400">
                  PROJECT {project.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm text-sky-400">
                  {project.type}
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/10 px-3 py-2 text-xs text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}<br />
                  {project.name === "GPA Calculator & Academic Planner" && (
                    <a
                      href="https://gpa-calculator1.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-violet-400"
                    >
                      View Live Project
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.name === "Expense Tracker" && (
                    <a
                      href="/apk/ExpenseTracker.apk"
                      download="ExpenseTracker.apk"
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
                    >
                      Download APK
                      <Download size={17} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 bg-[#0D1220] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            MY ACADEMIC JOURNEY
          </p>
          <h2 className="mt-4 text-4xl font-bold">Education</h2>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827] p-8">
            <p className="text-sm text-violet-400">UNDERGRADUATE DEGREE</p>
            <h3 className="mt-4 text-2xl font-bold">
              Bachelor of Computer Science
            </h3>
            <p className="mt-3 text-slate-400">
              University of Ruhuna (UOR)
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest text-violet-400">
            GET IN TOUCH
          </p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Let&apos;s Build Something Together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
            Interested in collaborating, discussing technology,
            or exploring opportunities? Feel free to connect with me.
          </p>

          <a
            href="mailto:pasanmadu210@gmail.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 font-medium transition hover:bg-violet-500"
          >
            Contact Me <Mail size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-center text-sm text-slate-500">
          <p className="text-center">
            © 2026 Pasan Madushanka.
          </p>
        </div>
      </footer>

    </main>
  );
}
