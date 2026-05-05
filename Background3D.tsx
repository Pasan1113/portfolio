import { motion } from 'framer-motion';

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating 3D Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 180, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="w-full h-full rounded-2xl bg-violet-500/20 border border-violet-500/30"
          style={{
            transform: 'rotateX(45deg) rotateZ(45deg)',
            boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24"
        animate={{
          rotateY: [360, 0],
          rotateZ: [0, 180, 360],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="w-full h-full rounded-full bg-cyan-500/20 border border-cyan-500/30"
          style={{
            boxShadow: '0 0 50px rgba(6, 182, 212, 0.3)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 w-20 h-20"
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="w-full h-full bg-pink-500/20 border border-pink-500/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.3)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16"
        animate={{
          rotateZ: [0, 360],
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="w-full h-full bg-amber-500/20 border border-amber-500/30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)',
          }}
        />
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-pink-600/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
}