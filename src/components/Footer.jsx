import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/madhavi584', icon: <FiGithub size={14} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/madhavi-garud', icon: <FiLinkedin size={14} /> },
  { label: 'Email', href: 'mailto:madhavigarud013@gmail.com', icon: <FiMail size={14} /> },
  { label: 'LeetCode', href: 'https://leetcode.com/u/madhavigarud85' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="border-t pt-14 pb-8 px-6"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'rgba(99,102,241,0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-syne font-extrabold text-xl grad-text mb-3">
              Madhavi Garud
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--muted)' }}>
              MERN Stack Developer building scalable web & mobile experiences from Pune,
              Maharashtra. Open to exciting opportunities.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <FiGithub />, href: 'https://github.com/madhavi584', label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/madhavi-garud', label: 'LinkedIn' },
                { icon: <FiMail />, href: 'mailto:madhavigarud013@gmail.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(99,102,241,0.18)',
                    color: 'var(--muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.15)'
                    e.currentTarget.style.color = 'var(--violet)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--violet)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 transition-colors duration-200"
                    style={{ color: 'var(--muted)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--violet)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {link.icon && link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-6 flex-wrap gap-4"
          style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2025 Madhavi Garud. Crafted with ❤️ and a lot of Node.js
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: 'var(--violet)',
              cursor: 'pointer',
            }}
          >
            <FiArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
