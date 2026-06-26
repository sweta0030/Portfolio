import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { skills } from '../data/portfolio.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Hardware fluency, embedded logic, and team-ready execution">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon: Icon, items, level }) => (
          <motion.article key={category} variants={fadeUp} whileHover={{ y: -6 }} className="glass-panel group p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent transition group-hover:shadow-glow">
                <Icon size={23} />
              </div>
              <span className="font-display text-sm font-bold text-accent">{level}%</span>
            </div>
            <h3 className="font-display text-xl font-bold text-ink">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="badge">{item}</span>
              ))}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
