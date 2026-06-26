import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { education } from '../data/portfolio.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering curiosity with practical hands-on momentum">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel p-6 sm:p-8">
          <p className="text-lg leading-8 text-muted">
            Electrical and Electronics Engineering undergraduate with hands-on experience in Embedded Systems, IoT,
            Robotics and Automation. Passionate about developing intelligent automation and smart electronic systems.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ['4+', 'Projects'],
              ['7+', 'Activities'],
              ['7.5', 'CGPA'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-line bg-panel/60 p-4 text-center">
                <p className="font-display text-3xl font-bold text-accent">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
          {education.map(({ title, place, meta, detail, icon: Icon }) => (
            <motion.article key={title} variants={fadeUp} className="timeline-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon size={21} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-muted">{place}</p>
                <p className="mt-2 text-sm text-muted">{meta} / {detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
