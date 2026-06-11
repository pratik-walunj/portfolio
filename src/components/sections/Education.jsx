import { motion } from 'framer-motion'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, slideLeft, staggerContainer } from '../../utils/animations'
import { portfolioData } from '../../data/portfolioData'

export default function Education() {
  const [ref, inView] = useInView(0.2)
  const { education } = portfolioData

  return (
    <section id="education" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 06 — education
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">Academic Background</h2>
        <p className="section-sub">
          Building deep theoretical foundations alongside hands-on engineering practice.
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={slideLeft}
            className="flex gap-6 pb-8 last:pb-0"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: '20px' }}>
              <div
                className="w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0 z-10"
                style={{ background: 'linear-gradient(135deg,#6366f1,#c084fc)' }}
              />
              {i < education.length - 1 && (
                <div
                  className="flex-1 w-px mt-2"
                  style={{ background: 'rgba(99,102,241,0.2)', minHeight: '40px' }}
                />
              )}
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ borderColor: 'rgba(99,102,241,0.4)', x: 4 }}
              className="flex-1 rounded-2xl px-6 py-5 mb-2 transition-all duration-300"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="font-syne font-bold text-base flex items-center gap-2 flex-wrap">
                    {edu.degree}
                    {edu.status && (
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full font-normal font-mono"
                        style={{
                          background: 'rgba(99,102,241,0.12)',
                          border: '1px solid rgba(99,102,241,0.2)',
                          color: 'var(--violet)',
                        }}
                      >
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <div
                    className="text-sm font-medium mt-1"
                    style={{ color: 'var(--violet)' }}
                  >
                    {edu.school}
                  </div>
                </div>
                <div
                  className="text-xs font-mono whitespace-nowrap"
                  style={{ color: 'var(--muted)' }}
                >
                  {edu.year}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
