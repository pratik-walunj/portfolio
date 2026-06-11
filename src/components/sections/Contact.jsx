import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { useInView } from "../../hooks/usePortfolio";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "../../utils/animations";
import { portfolioData } from "../../data/portfolioData";

// ⚠️  Replace these with your real Web3Forms credentials
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const contactLinks = (personal) => [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    sub: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    sub: "linkedin.com/in/madhavi-garud",
    href: personal.linkedin,
  },
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    sub: "github.com/madhavi584",
    href: personal.github,
  },
  {
    icon: <FiPhone size={18} />,
    label: "WhatsApp / Phone",
    sub: personal.phone,
    href: `https://wa.me/${personal.phone.replace(/\D/g, "")}`,
  },
];

export default function Contact() {
  const [ref, inView] = useInView(0.15);
  const { personal } = portfolioData;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus("sending");

    try {
      const formData = new FormData();

      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        // 08 — contact
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="section-title">
          Let's Build Something
          <br />
          <span className="grad-text">Together</span>
        </h2>
        <p className="section-sub">
          Open to internships, full-time opportunities, and freelance projects.
          Drop a message and I'll get back within 24 hours!
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start"
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left: links */}
        <motion.div variants={slideLeft} className="space-y-4">
          {contactLinks(personal).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 no-underline"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                e.currentTarget.style.background = "rgba(99,102,241,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.background = "var(--card-bg)";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  color: "var(--violet)",
                }}
              >
                {link.icon}
              </div>
              <div>
                <div className="text-sm font-semibold">{link.label}</div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {link.sub}
                </div>
              </div>
            </a>
          ))}

          {/* Location card */}
          <div
            className="rounded-2xl px-5 py-4 flex items-center gap-4"
            style={{
              background: "rgba(99,102,241,0.06)",
              border: "1px solid rgba(99,102,241,0.15)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(99,102,241,0.12)",
                color: "var(--violet)",
              }}
            >
              <FiMapPin size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold">Location</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                Pune, Maharashtra, India
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "var(--indigo)" }}
              >
                Open to remote & on-site
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          variants={slideRight}
          onSubmit={onSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

          <input
            type="hidden"
            name="from_name"
            value="Madhavi Garud Portfolio"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "var(--muted)" }}
              >
                Your Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ravi Kumar"
                required
                className="contact-input"
              />
            </div>
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "var(--muted)" }}
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="ravi@company.com"
                required
                className="contact-input"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: "var(--muted)" }}
            >
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="Job Opportunity at XYZ Company"
              required
              className="contact-input"
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: "var(--muted)" }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Hi Madhavi, I'd love to discuss a MERN role at our company..."
              required
              rows={5}
              className="contact-input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg,#6366f1,#c084fc)",
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                />
                Sending...
              </>
            ) : (
              <>
                <FiSend size={16} />
                Send Message
              </>
            )}
          </button>

          {/* Status feedback */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl px-4 py-3 text-sm text-center"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.3)",
                color: "#4ade80",
              }}
            >
              ✅ Message sent! I'll get back to you within 24 hours.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl px-4 py-3 text-sm text-center"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#f87171",
              }}
            >
              ❌ Something went wrong. Please try emailing directly.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
