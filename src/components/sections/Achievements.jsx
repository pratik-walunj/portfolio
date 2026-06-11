import { motion } from 'framer-motion'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, scaleIn, staggerContainer } from '../../utils/animations'
import { portfolioData } from '../../data/portfolioData'

export default function Achievements() {
  const [ref, inView] = useInView(0.2)
  const { achievements } = portfolioData

  return (
    <section id="achievements" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 07 — achievements
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">Beyond the Code</h2>
        <p className="section-sub">
          Activities and accomplishments that reflect leadership, curiosity, and continuous
          growth beyond technical work.
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {achievements.map((ach) => (
          <motion.div
            key={ach.title}
            variants={scaleIn}
            whileHover={{ y: -5, borderColor: 'rgba(99,102,241,0.4)' }}
            className="rounded-2xl p-6 transition-all duration-300 cursor-default"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className="text-3xl mb-4">{ach.icon}</div>
            <div className="font-syne font-bold text-sm mb-2">{ach.title}</div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              {ach.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
