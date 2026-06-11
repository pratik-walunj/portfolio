import { motion } from 'framer-motion'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, scaleIn, staggerContainer } from '../../utils/animations'
import { portfolioData } from '../../data/portfolioData'

export default function Skills() {
  const [ref, inView] = useInView(0.15)
  const { skills } = portfolioData

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 02 — technical skills
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">What I Work With</h2>
        <p className="section-sub">
          A curated stack for building production-ready web and mobile applications — from
          frontend to backend, mobile to database.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={scaleIn}
            whileHover={{ y: -5, borderColor: 'rgba(99,102,241,0.45)' }}
            className="rounded-2xl p-6 transition-all duration-300 cursor-default"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.12)' }}
              >
                {skillGroup.icon}
              </div>
              <div className="font-syne font-bold text-sm">{skillGroup.category}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item.name}
                  className={`skill-tag ${item.highlight ? 'highlight' : ''}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-12 overflow-hidden"
      >
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(99,102,241,0.04)',
            border: '1px solid rgba(99,102,241,0.12)',
          }}
        >
          <p className="text-xs font-mono text-center mb-4" style={{ color: 'var(--muted)' }}>
            // primary technology stack
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'React Native', 'Firebase', 'JWT', 'REST APIs', 'Git'].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-sm font-mono px-4 py-2 rounded-lg font-medium"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: 'var(--violet)',
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
