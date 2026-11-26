"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Code2, Smartphone, Server, Database, BarChart3, Wrench, BrainCircuit, ArrowUpRight, Download, Mail, Menu, X, Sprout, Activity, GraduationCap, Wallet, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [["About", "about"], ["Projects", "projects"], ["Data Science", "data-science"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]];
const filters = ["All", "Full Stack", "Desktop", "Web", "Mobile", "Data Science"];
const projects = [
  { name: "AgriLanka", category: "Full Stack", type: "University group project · In development", icon: Sprout, color: "text-emerald-300", description: "An agriculture marketplace connecting farmers and buyers, with order management, logistics workflows and vegetable price forecasting.", features: ["JWT authentication and REST APIs", "Farmer listings and partial order offers", "Python forecasting microservice"], technologies: ["Flutter", "Spring Boot", "PostgreSQL", "Supabase", "FastAPI"], href: "#data-science", action: "Explore ML case study", download: false },
  { name: "Veltrix", category: "Desktop", type: "Windows desktop application", icon: Activity, color: "text-sky-300", description: "A desktop utility for monitoring network data usage and speed with a compact floating widget and personalization options.", features: ["Real-time network monitoring", "Floating mini widget", "Windows startup preferences"], technologies: ["C#", ".NET"], href: "https://github.com/Pasan1113/Veltrix/releases/tag/v1.0.0", action: "Download for Windows", download: false },
  { name: "GPA Calculator & Academic Planner", category: "Web", type: "Student productivity application", icon: GraduationCap, color: "text-violet-300", description: "A web application that helps university students calculate GPA and plan the grades needed to achieve their academic targets. Used by approximately 100 users.", features: ["Credit-weighted GPA calculation", "Target GPA planning"], technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Vercel"], href: "https://gpa-calculator1.vercel.app/", action: "View live project", download: false },
  { name: "Expense Tracker", category: "Mobile", type: "Personal finance application", icon: Wallet, color: "text-amber-300", description: "A Flutter application for tracking income, expenses and savings, managing budgets and viewing financial reports.", features: ["Offline SQLite storage", "Monthly budgets and reports", "Light and dark themes"], technologies: ["Flutter", "Dart", "SQLite", "Provider", "Material 3"], href: "/apk/ExpenseTracker.apk", action: "Download APK", download: true },
  { name: "Vegetable Price Forecasting", category: "Data Science", type: "AgriLanka ML component", icon: BrainCircuit, color: "text-fuchsia-300", description: "A time-series forecasting experiment using historical wholesale vegetable prices, feature engineering and chronological model evaluation.", features: ["Next-day and 7-day forecasts", "Baseline, Random Forest and Gradient Boosting comparison"], technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI"], href: "#data-science", action: "Read case study", download: false },
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
      { name: "C#", status: "Project Experience" },
      { name: "TypeScript", status: "Learning" },
      { name: "Python", status: "Project Experience" },
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
      { name: ".NET", status: "Project Experience" },
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
      { name: "Pandas", status: "Project Experience" },
      { name: "NumPy", status: "Learning" },
      { name: "Matplotlib", status: "Learning" },
      { name: "Scikit-learn", status: "Project Experience" },
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



const panel = "rounded-3xl border border-white/10 bg-[#111827]/80";
const primary = "inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500";
const secondary = "inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400";
function Heading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="mb-10 max-w-3xl"><p className="text-xs font-semibold tracking-[0.22em] text-violet-300">{label}</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}</div>;
}
function Socials() {
  return <div className="flex items-center gap-5 text-slate-400"><a aria-label="GitHub" href="https://github.com/Pasan1113" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={23}/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/pasan-madushanka/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300"><FaLinkedin size={23}/></a><a aria-label="Email" href="mailto:pasanmadu210@gmail.com" className="hover:text-violet-300"><Mail size={23}/></a></div>;
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(p => filter === "All" || p.category === filter);
  return <MotionConfig reducedMotion="user"><main className="min-h-screen bg-[#080B14] text-slate-100">
    <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-violet-700 focus:p-3">Skip to content</a>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080B14]/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" onClick={() => setMenu(false)} className="text-xl font-bold tracking-tight">Pasan<span className="text-violet-400">.</span></a>
        <div className="hidden items-center gap-6 lg:flex">{links.map(([name,id]) => <a key={id} href={`#${id}`} className="text-sm text-slate-400 transition hover:text-white">{name}</a>)}</div>
        <a href="/cv.pdf" download className={`${secondary} hidden lg:inline-flex`}><Download size={16}/> CV</a>
        <button type="button" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)} className="rounded-lg border border-white/10 p-2 lg:hidden">{menu ? <X/> : <Menu/>}</button>
      </nav>
      {menu && <div id="mobile-menu" className="grid gap-1 border-t border-white/10 px-5 py-4 lg:hidden">{links.map(([name,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">{name}</a>)}<a href="/cv.pdf" download className={secondary}>Download CV</a></div>}
    </header>
    <section id="home" className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"/>
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-sky-600/10 blur-[120px]"/>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.45}}>
          <p className="mb-6 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-medium tracking-wide text-violet-200">COMPUTER SCIENCE UNDERGRADUATE</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Hi, I&apos;m Pasan <span className="gradient-text">Madushanka.</span></h1>
          <p className="mt-6 text-2xl font-semibold leading-snug sm:text-4xl">Building software.<br/><span className="text-violet-300">Exploring data.</span></p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">Computer Science undergraduate at the University of Ruhuna, building full-stack and mobile applications and exploring data-driven solutions through machine learning.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className={primary}>Explore my work <ArrowUpRight size={18}/></a><a href="/cv.pdf" download className={secondary}><Download size={18}/> Download CV</a></div>
          <div className="mt-8"><Socials/></div>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className={`${panel} mx-auto w-full max-w-md p-6 sm:p-8`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-4"><div aria-hidden="true" className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-400"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div><span className="font-mono text-xs text-slate-400">developer.tsx</span></div>
          <div className="py-7 text-center"><Image src="/profile.png" alt="Pasan Madushanka" width={160} height={160} priority className="mx-auto h-32 w-32 rounded-3xl border border-violet-400/30 object-cover"/><h2 className="mt-5 text-xl font-bold">Pasan Madushanka</h2><p className="mt-2 text-sm text-slate-400">University of Ruhuna</p></div>
          <div className="space-y-2 rounded-2xl bg-[#080B14] p-4 font-mono text-xs leading-6 sm:text-sm"><p className="text-violet-300">const developer = {"{"}</p><p className="break-words pl-3 text-emerald-300">focus: &quot;Software Engineering&quot;,</p><p className="pl-3 text-emerald-300">interest: &quot;Data Science&quot;,</p><p className="pl-3 text-emerald-300">mindset: &quot;Always Learning&quot;</p><p className="text-violet-300">{"}"};</p></div>
          <div className="mt-5 flex flex-wrap gap-2">{["Java","Flutter","Spring Boot","Python","C#"].map(t => <span key={t} className="rounded-lg bg-violet-400/10 px-3 py-2 text-xs text-violet-200">{t}</span>)}</div>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3">{[["~100","GPA app users"],["Full Stack","Web, mobile & backend"],["ML","Time-series forecasting"]].map(([value,label]) => <div key={label} className={`${panel} p-5`}><p className="text-2xl font-bold text-violet-200">{value}</p><p className="mt-1 text-sm text-slate-400">{label}</p></div>)}</div>
      <a href="#projects" className="mx-auto mt-8 flex w-fit items-center gap-2 text-sm text-slate-400 hover:text-white">Selected work <ArrowDown size={16}/></a>
    </section>
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Heading label="ABOUT ME" title="Curious by nature. Practical by design." description="I enjoy solving real-world problems with software and exploring how data can support better decisions. My interests include full-stack development, mobile applications, data analytics and machine learning."/><div className="grid gap-4 sm:grid-cols-2">{[{icon:Code2,title:"Software Engineering",text:"Building applications, secure APIs and database-backed workflows."},{icon:BrainCircuit,title:"Data Science",text:"Exploring data preprocessing, feature engineering and model evaluation."}].map(({icon:Icon,title,text}) => <div key={title} className={`${panel} p-6`}><Icon className="mb-4 text-violet-300"/><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-400">{text}</p></div>)}</div></section>
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Heading label="SELECTED WORK" title="Featured projects" description="Practical applications and experiments across software development and data science."/>
      <div aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">{filters.map(f => <button key={f} type="button" aria-pressed={filter===f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-sm transition ${filter===f ? "border-violet-400 bg-violet-500/20 text-violet-200" : "border-white/10 text-slate-400 hover:text-white"}`}>{f}</button>)}</div>
      <div className="grid gap-5 md:grid-cols-2">{visible.map(p => <motion.article key={p.name} initial={{opacity:0}} animate={{opacity:1}} className={`${panel} flex flex-col overflow-hidden transition-colors hover:border-violet-400/40`}><div className="relative flex h-36 items-center justify-center border-b border-white/10 bg-gradient-to-br from-violet-950/40 to-[#080B14]"><p.icon size={56} strokeWidth={1.4} className={p.color}/><span className="absolute bottom-3 left-4 rounded-full border border-white/10 bg-[#080B14] px-3 py-1 text-xs text-slate-300">{p.category}</span></div><div className="flex flex-1 flex-col p-6"><p className="text-xs font-medium text-violet-300">{p.type}</p><h3 className="mt-2 text-2xl font-bold">{p.name}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{p.description}</p><ul className="my-5 space-y-2 text-sm text-slate-300">{p.features.map(f => <li key={f} className="flex gap-2"><span aria-hidden="true" className="text-violet-400">•</span>{f}</li>)}</ul><div className="mb-5 flex flex-wrap gap-2">{p.technologies.map(t => <span key={t} className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-slate-300">{t}</span>)}</div><div className="mt-auto flex flex-wrap gap-3">{p.href && <a href={p.href} download={p.download || undefined} target={p.href.startsWith("https:") ? "_blank" : undefined} rel={p.href.startsWith("https:") ? "noopener noreferrer" : undefined} className={`${secondary} mt-auto self-start`}>{p.action}{p.download || p.name === "Veltrix" ? <Download size={16}/> : <ArrowUpRight size={16}/>}</a>}{p.name === "Veltrix" && <a href="https://github.com/Pasan1113/Veltrix" target="_blank" rel="noopener noreferrer" className={secondary}><FaGithub size={16}/> Source Code</a>}</div></div></motion.article>)}</div>
    </section>
    <section id="data-science" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Heading label="DATA SCIENCE CASE STUDY" title="Forecasting vegetable prices" description="A forecasting component developed for AgriLanka to support agricultural planning."/><div className={`${panel} p-6 sm:p-8`}><div className="grid gap-4 sm:grid-cols-3">{[["1,419","Historical daily records"],["5","Vegetable varieties"],["1 & 7 days","Forecast horizons"]].map(([v,l]) => <div key={l} className="rounded-2xl border border-white/10 bg-[#080B14] p-5"><p className="text-2xl font-bold text-sky-300">{v}</p><p className="mt-2 text-sm text-slate-400">{l}</p></div>)}</div><h3 className="mt-8 text-xl font-semibold">Methodology</h3><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["01","Data preparation","Clean daily wholesale price records."],["02","Feature engineering","Lag features and rolling averages."],["03","Model evaluation","Chronological splits and baseline comparisons."],["04","API integration","Serve forecasts through FastAPI."]].map(([n,t,d]) => <div key={n} className="rounded-xl border border-white/10 p-4"><p className="text-xs text-violet-300">{n}</p><h4 className="mt-2 font-semibold">{t}</h4><p className="mt-2 text-sm leading-6 text-slate-400">{d}</p></div>)}</div><p className="mt-6 rounded-xl border border-sky-400/20 bg-sky-400/5 p-4 text-sm leading-7 text-slate-300"><strong className="text-sky-300">Key finding:</strong> Simple persistence baselines were competitive with tree-based models for next-day predictions. Model selection is based on validation performance rather than model complexity.</p></div></section>
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Heading label="MY TOOLKIT" title="Technical skills" description="Technologies used in projects and areas of ongoing learning."/><div className="mb-6 flex flex-wrap gap-4 text-xs text-slate-400"><span className="text-violet-300">● Project experience</span><span className="text-sky-300">● Learning</span><span>● Basic experience</span></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillCategories.map(c => <article key={c.title} className={`${panel} p-6`}><c.icon size={25} className="mb-4 text-violet-300"/><h3 className="font-semibold">{c.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{c.description}</p><div className="mt-5 flex flex-wrap gap-2">{c.skills.map(s => <span key={s.name} title={s.status} className={`rounded-lg border px-3 py-2 text-xs ${s.status==="Learning" ? "border-sky-400/20 bg-sky-400/10 text-sky-200" : s.status.startsWith("Basic") ? "border-white/10 text-slate-300" : "border-violet-400/20 bg-violet-400/10 text-violet-200"}`}>{s.name}<span className="sr-only"> — {s.status}</span></span>)}</div></article>)}</div></section>
    <section id="education" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Heading label="ACADEMIC JOURNEY" title="Education"/><div className={`${panel} flex flex-wrap items-center gap-5 p-6 sm:p-8`}><GraduationCap size={40} className="text-violet-300"/><div><p className="text-xs text-violet-300">UNDERGRADUATE DEGREE</p><h3 className="mt-2 text-xl font-bold">Bachelor of Computer Science</h3><p className="mt-2 text-slate-400">University of Ruhuna (UOR)</p></div></div></section>
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className={`${panel} bg-gradient-to-br from-violet-950/30 to-[#111827] px-6 py-12 text-center sm:py-16`}><p className="text-xs tracking-widest text-violet-300">GET IN TOUCH</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">Let&apos;s build something together.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Interested in software development, data science, collaborations or internship opportunities? Feel free to connect.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a href="mailto:pasanmadu210@gmail.com" className={primary}><Mail size={18}/> Contact me</a><a href="/cv.pdf" download className={secondary}><Download size={18}/> Download CV</a></div><div className="mt-7 flex justify-center"><Socials/></div></div></section>
    <footer className="border-t border-white/10 px-5 py-7"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-400"><p>© 2026 Pasan Madushanka.</p><a href="#home" className="hover:text-white">Back to top ↑</a></div></footer>
  </main></MotionConfig>;
}
