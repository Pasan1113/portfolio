import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Nebula Dashboard',
      description: 'A real-time data visualization dashboard with animated charts and effects',
      tags: ['React', 'D3.js', 'TailwindCSS'],
      color: 'from-violet-600 to-indigo-900',
      stars: 128,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with smooth animations and checkout flow',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-cyan-600 to-teal-900',
      stars: 94,
    },
    {
      title: 'Creative Portfolio',
      description: 'Interactive portfolio showcasing work with engaging animations',
      tags: ['React', 'Framer Motion', 'GSAP'],
      color: 'from-pink-600 to-rose-900',
      stars: 156,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tags: ['TypeScript', 'Node.js', 'MongoDB'],
      color: 'from-amber-600 to-orange-900',
      stars: 203,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing creativity and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all"
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <motion.div
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
                    >
                      <Play className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
                    >
                      <Star className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}