import { motion } from 'framer-motion';
import { Code, Shield, Clock, Users } from 'lucide-react';

export function AboutSection() {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Web Animations', level: 90 },
  ];

  const services = [
    { icon: Code, title: 'Web Development', description: 'Full-stack applications with modern frameworks' },
    { icon: Shield, title: 'Secure Code', description: 'Best practices for secure applications' },
    { icon: Clock, title: 'Fast Delivery', description: 'On-time project completion' },
    { icon: Users, title: 'Collaboration', description: 'Working closely with clients' },
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
            About <span className="text-violet-400">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that inspire and engage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm a creative developer with 5+ years of experience building digital products. 
              I specialize in creating immersive web experiences using cutting-edge technologies 
              and modern design principles.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              My approach combines technical excellence with artistic vision, resulting in 
              websites and applications that are not just functional, but memorable.
            </p>
            
            {/* Skills */}
            <h4 className="text-lg font-semibold text-white mb-4">Skills</h4>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '100%' }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-violet-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet-500/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{service.title}</h4>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}