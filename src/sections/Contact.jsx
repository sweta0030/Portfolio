import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button.jsx';
import Section from '../components/Section.jsx';
import { contactCards } from '../data/portfolio.js';
import { fadeUp, stagger } from '../utils/motion.js';

const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm(initial);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect for embedded systems, robotics, and internships">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contactCards.map(({ label, value, href, icon: Icon }) => (
            <motion.a key={label} variants={fadeUp} href={href} className="timeline-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-muted">{label}</p>
                <p className="mt-1 font-medium text-ink">{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
        <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} onSubmit={submit} className="glass-panel p-6 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={setForm} />
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={setForm} />
          </div>
          <Field label="Message" name="message" value={form.message} error={errors.message} onChange={setForm} multiline />
          {sent && <p className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-200">Message validated. Connect this form to your preferred backend when ready.</p>}
          <Button type="submit" icon={Send} className="mt-6">Send Message</Button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', multiline = false }) {
  const id = `field-${name}`;
  const Component = multiline ? 'textarea' : 'input';
  return (
    <label htmlFor={id} className={`mt-5 block ${multiline ? '' : 'sm:mt-0'}`}>
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <Component
        id={id}
        name={name}
        type={type}
        rows={multiline ? 6 : undefined}
        value={value}
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field"
      />
      {error && <span id={`${id}-error`} className="mt-2 block text-sm font-medium text-rose-800 dark:text-rose-200">{error}</span>}
    </label>
  );
}
