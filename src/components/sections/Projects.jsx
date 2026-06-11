import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, scaleIn, staggerContainer } from '../../utils/animations'
import { portfolioData } from '../../data/portfolioData'

const previewStyles = {
  lms: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(192,132,252,0.15))',
  gym: 'linear-gradient(135deg, rgba(20,184,166,0.22), rgba(99,102,241,0.15))',
  knap: 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(239,68,68,0.12))',
}

export default function Projects() {
  const [ref, inView] = useInView(0.1)
  const [filter, setFilter] = useState('All')
  const { projects } = portfolioData

  const filters = ['All', 'Web', 'Mobile', 'DSA']
  const filterMap = { Web: ['lms'], Mobile: ['gym'], DSA: ['knap'] }

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => filterMap[filter]?.includes(p.colorClass))

  return (
    <section id="projects" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 04 — featured projects
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-sub">
          A selection of production-ready projects showcasing full-stack engineering, mobile
          development, and algorithm visualization.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex gap-2 flex-wrap mb-10"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: filter === f ? 'linear-gradient(135deg,#6366f1,#c084fc)' : 'var(--card-bg)',
              border: `1px solid ${filter === f ? 'transparent' : 'var(--card-border)'}`,
              color: filter === f ? '#fff' : 'var(--muted)',
            }}
          >
            {f}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.45)' }}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
            >
              {/* Preview */}
              <div
                className="h-40 flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: previewStyles[project.colorClass] }}
              >
                {project.emoji}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(99,102,241,0.05) 10px, rgba(99,102,241,0.05) 11px)',
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-syne font-bold text-base mb-2">{project.title}</h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: 'var(--muted)' }}
                >
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'var(--muted)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.color = 'var(--muted)'
                    }}
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg,#6366f1,#c084fc)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
