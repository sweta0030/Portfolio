import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion.js';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
