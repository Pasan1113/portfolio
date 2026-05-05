import { motion } from 'framer-motion';
import { Heart, Bell, Mail } from 'lucide-react';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6 border border-violet-500/30">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Creative{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Developer
          </span>
          <br />& Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I craft immersive digital experiences that blend cutting-edge technology with stunning visual design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </motion.button>
          <motion.button
            onClick={() => setActiveSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold text-lg transition-all duration-300 border border-slate-700 hover:border-slate-600"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Heart, href: '#', label: 'Favorites' },
            { icon: Bell, href: '#', label: 'Notifications' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/50"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-violet-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}