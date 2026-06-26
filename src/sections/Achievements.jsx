import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { achievements } from '../data/portfolio.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Campus leadership, technical exposure, and professional growth">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-line to-transparent sm:block" />
        <div className="space-y-4">
          {achievements.map(({ title, icon: Icon }, index) => (
            <motion.article key={title} variants={fadeUp} className="timeline-card sm:ml-10">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon size={21} />
              </div>
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <span className="text-sm text-muted">0{index + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
