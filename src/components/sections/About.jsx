import { motion } from "framer-motion";
import { useInView } from "../../hooks/usePortfolio";
import profileImage from "../../images/possport_image.jpeg";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "../../utils/animations";
import { portfolioData } from "../../data/portfolioData";

const timelineItems = [
  {
    title: "MERN Stack Developer Intern",
    sub: "AB Software Solution · Mar 2025 – Present",
  },
  {
    title: "M.Sc. Computer Science",
    sub: "Fergusson College, Pune · 2025–2026",
  },
  {
    title: "B.Sc. Computer Science",
    sub: "Yashwantrao Mohite College · 2021–2024",
  },
];

const tags = [
  "Full Stack",
  "MERN",
  "React Native",
  "REST APIs",
  "DSA",
  "Firebase",
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        // 01 — about me
      </motion.span>

      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center mt-2"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Avatar side */}
        {/* Avatar side */}
        <motion.div
          variants={slideLeft}
          className="flex flex-col items-center md:items-start"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 rounded-3xl overflow-hidden mb-6 relative"
            style={{
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <img
              src={profileImage}
              alt="Madhavi Garud"
              className="w-full h-full object-cover"
            />

            {/* Decorative ring */}
            <div
              className="absolute -inset-3 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "var(--violet)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Mini stat cards */}
          <div className="grid grid-cols-2 gap-3 mt-6 w-full max-w-xs">
            {[
              { label: "Location", value: "📍 Pune, MH" },
              { label: "Status", value: "🟢 Available" },
              { label: "Focus", value: "⚛️ MERN Stack" },
              { label: "Education", value: "🎓 M.Sc. CS" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-3"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {item.label}
                </div>
                <div className="text-xs font-semibold mt-0.5">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div variants={slideRight}>
          <h2 className="section-title">
            Passionate about
            <br />
            <span className="grad-text">Clean Architecture</span>
          </h2>

          <div className="space-y-4 mb-8" style={{ color: "var(--muted)" }}>
            <p className="leading-relaxed">
              I'm{" "}
              <strong className="text-white font-semibold">
                Madhavi Garud
              </strong>
              , a MERN Stack Developer from{" "}
              <strong className="text-white font-semibold">
                Pune, Maharashtra
              </strong>{" "}
              — currently pursuing M.Sc. Computer Science from Fergusson College
              while building production-grade applications.
            </p>
            <p className="leading-relaxed">
              I specialize in crafting{" "}
              <strong className="text-white font-semibold">
                scalable full-stack web and mobile platforms
              </strong>
              , with deep expertise in JWT authentication, RBAC systems, REST
              API design, and third-party integrations like Razorpay and
              Firebase.
            </p>
            <p className="leading-relaxed">
              Beyond code, I believe great software starts with{" "}
              <strong className="text-white font-semibold">
                clean architecture and user-first thinking
              </strong>{" "}
              — building systems that are as maintainable as they are powerful.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {timelineItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="relative flex flex-col items-center mt-1 flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full z-10"
                    style={{
                      background: "linear-gradient(135deg,#6366f1,#c084fc)",
                    }}
                  />
                  {i < timelineItems.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{
                        height: "28px",
                        background: "rgba(99,102,241,0.2)",
                      }}
                    />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
