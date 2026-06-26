import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import Button from '../components/Button.jsx';
import Section from '../components/Section.jsx';
import { projects } from '../data/portfolio.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Projects({ onSelectProject }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Prototype-first projects for robotics, IoT, and power systems">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -7 }} className="project-card">
              <div className="project-visual" style={{ '--project-accent': project.accent }}>
                <Icon size={54} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="badge">{tag}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="#" icon={ExternalLink} className="!px-4 !py-2">Live Demo</Button>
                  <Button href="#" variant="ghost" icon={Github} className="!px-4 !py-2">GitHub</Button>
                  <Button type="button" variant="soft" icon={Maximize2} className="!px-4 !py-2" onClick={() => onSelectProject(project)}>
                    Details
                  </Button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
