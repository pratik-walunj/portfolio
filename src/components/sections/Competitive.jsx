import { motion } from 'framer-motion'
import { useInView } from '../../hooks/usePortfolio'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../../utils/animations'

const codeSnippets = {
  leetcode: `<span style="color:#c084fc">def</span> <span style="color:#6366f1">knapsack</span>(items, capacity):
  dp = [<span style="color:#f472b6">0</span>] * (capacity + <span style="color:#f472b6">1</span>)
  <span style="color:#c084fc">for</span> w, v <span style="color:#c084fc">in</span> items:
    <span style="color:#c084fc">for</span> c <span style="color:#c084fc">in</span> range(capacity, w-<span style="color:#f472b6">1</span>, -<span style="color:#f472b6">1</span>):
      dp[c] = <span style="color:#6366f1">max</span>(dp[c], dp[c-w] + v)
  <span style="color:#c084fc">return</span> dp[capacity]`,
  hackerrank: `<span style="color:#c084fc">class</span> <span style="color:#6366f1">Solution</span> {
  <span style="color:#c084fc">public</span> <span style="color:#6366f1">int</span>[] twoSum(<span style="color:#6366f1">int</span>[] nums, <span style="color:#6366f1">int</span> target) {
    Map&lt;Integer, Integer&gt; map = <span style="color:#c084fc">new</span> HashMap&lt;&gt;();
    <span style="color:#c084fc">for</span> (<span style="color:#6366f1">int</span> i = <span style="color:#f472b6">0</span>; i &lt; nums.length; i++) {
      <span style="color:#c084fc">int</span> comp = target - nums[i];
      <span style="color:#c084fc">if</span> (map.containsKey(comp))
        <span style="color:#c084fc">return new int</span>[]{map.get(comp), i};
      map.put(nums[i], i);
    }
    <span style="color:#c084fc">return new int</span>[<span style="color:#f472b6">0</span>];
  }
}`,
}

const platforms = [
  {
    key: 'leetcode',
    name: 'LeetCode',
    icon: '⚡',
    url: 'https://leetcode.com/u/madhavigarud85',
    gradient: 'linear-gradient(135deg,#f97316,#fb923c)',
    skills: ['Arrays', 'Trees', 'Dynamic Programming', 'Graphs', 'Strings', 'Binary Search'],
    lang: 'Python',
  },
  {
    key: 'hackerrank',
    name: 'HackerRank',
    icon: '🏆',
    url: 'https://hackerrank.com',
    gradient: 'linear-gradient(135deg,#22c55e,#4ade80)',
    skills: ['Data Structures', 'Algorithms', 'Java', 'Python', 'Problem Solving'],
    lang: 'Java',
  },
]

export default function Competitive() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="competitive" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <motion.span
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        // 05 — competitive programming
      </motion.span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">Problem Solver at Heart</h2>
        <p className="section-sub">
          Consistent practice in Data Structures & Algorithms across competitive programming
          platforms — sharpening logic one problem at a time.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {platforms.map((p, i) => (
          <motion.div
            key={p.key}
            variants={i === 0 ? slideLeft : slideRight}
            whileHover={{ y: -5, borderColor: 'rgba(99,102,241,0.4)' }}
            className="rounded-2xl p-7 flex flex-col transition-all duration-300"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            {/* Platform header */}
            <div className="text-4xl mb-4">{p.icon}</div>
            <div
              className="font-syne font-extrabold text-2xl mb-1"
              style={{
                background: p.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {p.name}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono mb-5 hover:underline"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
            >
              {p.url.replace('https://', '')}
            </a>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: 'var(--violet)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Code snippet */}
            <div
              className="rounded-xl p-4 text-xs leading-loose font-mono mt-auto"
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.1)',
                color: 'rgba(99,102,241,0.6)',
              }}
            >
              <div
                className="mb-2 text-xs"
                style={{ color: 'var(--subtle)' }}
              >
                // sample solution · {p.lang}
              </div>
              <pre
                style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                dangerouslySetInnerHTML={{ __html: codeSnippets[p.key] }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
