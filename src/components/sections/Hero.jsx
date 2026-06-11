import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useInView, useCounter } from "../../hooks/usePortfolio";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { portfolioData } from "../../data/portfolioData";
import ResumePDF from "../../images/Madhavi_Garud_Resume.pdf";

function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let drops = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / 14);
      drops = Array(cols).fill(1);
    };

    const chars = "01{}[]()<>/=!@#$%*abcdefABCDEF+-?;";

    const draw = () => {
      ctx.fillStyle = "rgba(8,8,15,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px JetBrains Mono, monospace";

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const useViolet = Math.random() > 0.55;
        const alpha = Math.random() * 0.65 + 0.25;
        ctx.fillStyle = useViolet
          ? `rgba(192,132,252,${alpha})`
          : `rgba(99,102,241,${alpha})`;
        ctx.fillText(char, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => {
      cancelAnimationFrame(animId);
      init();
      draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20 pointer-events-none"
      aria-hidden="true"
    />
  );
}

function StatItem({ stat, animate }) {
  const count = useCounter(stat.value, 1400, animate);
  return (
    <div className="text-center">
      <div className="font-syne font-extrabold text-3xl grad-text">
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs text-[var(--muted)] mt-1">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const [ref, inView] = useInView(0.3);
  const { personal, stats } = portfolioData;

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      <MatrixCanvas />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow pill */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "var(--violet)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#6366f1" }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-syne font-extrabold leading-tight mb-5"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Building Scalable
          <br />
          <span className="grad-text">Web & Mobile</span>
          <br />
          Experiences
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="text-lg leading-relaxed mb-8 mx-auto max-w-xl"
          style={{ color: "var(--muted)" }}
        >
          MERN Stack Developer specializing in full-stack applications, API
          development, authentication systems, and modern user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-3 justify-center flex-wrap mb-8"
        >
          <button className="btn-primary" onClick={() => scrollTo("#projects")}>
            View Projects
          </button>
          <button className="btn-outline" onClick={() => scrollTo("#contact")}>
            Hire Me →
          </button>
          <a
            href={ResumePDF}
            download
            className="btn-outline"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              color: "var(--muted)",
            }}
          >
            ⬇ Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-3 justify-center mb-10"
        >
          {[
            {
              icon: <FiGithub size={18} />,
              href: personal.github,
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={18} />,
              href: personal.linkedin,
              label: "LinkedIn",
            },
            {
              icon: <FiMail size={18} />,
              href: `mailto:${personal.email}`,
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.15)";
                e.currentTarget.style.borderColor = "var(--violet)";
                e.currentTarget.style.color = "var(--violet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--card-bg)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {stats.map((stat, i) => (
            <>
              {i > 0 && (
                <div
                  key={`div-${i}`}
                  className="w-px h-10"
                  style={{ background: "rgba(99,102,241,0.2)" }}
                />
              )}
              <StatItem key={stat.label} stat={stat} animate={inView} />
            </>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono" style={{ color: "var(--subtle)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-0.5 h-6 rounded-full"
          style={{ background: "rgba(99,102,241,0.4)" }}
        />
      </motion.div>
    </section>
  );
}
