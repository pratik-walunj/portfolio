import { motion } from 'framer-motion'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, slideLeft, staggerContainer } from '../../utils/animations'
import { portfolioData } from '../../data/portfolioData'

export default function Experience() {
  const [ref, inView] = useInView(0.2)
  const { experience } = portfolioData

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 03 — experience
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">Where I've Worked</h2>
        <p className="section-sub">
          Building real-world production platforms with a focus on performance, security, and
          scalability.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={slideLeft}
            whileHover={{ borderColor: 'rgba(99,102,241,0.4)' }}
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
            }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-syne font-bold text-lg mb-1">{exp.title}</h3>
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--violet)' }}
                >
                  {exp.company}
                </div>
              </div>
              <span
                className="self-start px-4 py-1.5 rounded-full text-xs font-mono whitespace-nowrap"
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: 'var(--violet)',
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Project badge */}
            <div
              className="rounded-xl px-4 py-3 mb-6 text-sm"
              style={{
                background: 'rgba(99,102,241,0.06)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <span style={{ color: 'var(--violet)', fontWeight: 600 }}>Project: </span>
              <span style={{ color: 'var(--muted)' }}>{exp.project}</span>
            </div>

            {/* Achievements */}
            <ul className="space-y-3">
              {exp.achievements.map((ach, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 font-mono"
                    style={{ color: 'var(--indigo)' }}
                  >
                    ▸
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ach.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong style="color:#f1f5f9;font-weight:600">$1</strong>'
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6" style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}>
              {['MERN Stack', 'JWT', 'RBAC', 'Razorpay', 'Firebase FCM', 'REST APIs', 'Android'].map(
                (t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
