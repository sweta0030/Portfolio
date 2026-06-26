import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Button from './Button.jsx';

export default function ProjectModal({ project, onClose }) {
  const Icon = project.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="glass-panel w-full max-w-2xl p-6 sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/12 text-accent">
              <Icon size={26} />
            </div>
            <div>
              <p className="section-eyebrow !mb-1">Project Detail</p>
              <h3 id="project-modal-title" className="font-display text-2xl font-bold text-ink">
                {project.title}
              </h3>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close project details">
            <X size={18} />
          </button>
        </div>
        <p className="text-muted">{project.details}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#" icon={ExternalLink}>Live Demo</Button>
          <Button href="#" variant="ghost" icon={Github}>GitHub</Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
