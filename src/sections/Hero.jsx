import { motion } from 'framer-motion';
import { Download, Mail, MoveRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '../assets/sweta-profile.jpg';
import Button from '../components/Button.jsx';
import { socials } from '../data/portfolio.js';

const words = ['Embedded Systems', 'IoT Developer', 'Robotics Enthusiast', 'Automation Engineer'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % words.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-2 text-sm text-muted backdrop-blur">
            <Sparkles size={16} className="text-accent" />
            Electrical & Electronics Engineering Undergraduate
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.03] text-ink sm:text-6xl lg:text-7xl">
            Sweta Singh
            <span className="hero-gradient-text mt-3 block">
              {words[index]}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Embedded Systems / IoT / Robotics Enthusiast building intelligent automation and smart electronic systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" icon={MoveRight}>View Projects</Button>
            <Button href="/Sweta-resume.pdf" variant="ghost" icon={Download} download>
              Download Resume
            </Button>
            <Button href="#contact" variant="soft" icon={Mail}>Contact Me</Button>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="icon-btn" aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative min-h-[420px]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-line bg-panel/50 shadow-soft backdrop-blur-xl" aria-hidden="true" />
          <div className="absolute inset-8 rounded-[1.5rem] border border-accent/20 bg-[linear-gradient(135deg,rgb(0_229_255/.08),transparent_40%,rgb(34_197_94/.09))]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 460" fill="none" aria-hidden="true">
            <path d="M84 115h132v74h100v94h160" stroke="rgb(var(--accent))" strokeWidth="2" strokeDasharray="8 10" />
            <path d="M105 348h134V236h190V96" stroke="#22C55E" strokeWidth="2" strokeDasharray="7 11" />
            {[84, 216, 316, 476, 105, 239, 429].map((x, i) => (
              <circle key={i} cx={x} cy={[115, 115, 189, 283, 348, 236, 96][i]} r="6" fill={i % 2 ? '#38BDF8' : '#22C55E'} />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 w-[min(72%,320px)] -translate-x-1/2 -translate-y-1/2">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/25 bg-panel/20 p-2 shadow-glow backdrop-blur">
              <img
                src={profileImage}
                alt="Sweta Singh"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-center"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.35rem] ring-1 ring-inset ring-white/15" />
            </div>
          </div>
          <div className="absolute left-10 top-12 animate-float rounded-2xl border border-line bg-[rgb(var(--bg)/0.82)] p-5 shadow-glow backdrop-blur">
            <p className="text-sm text-muted">Signal Chain</p>
            <p className="font-display text-2xl font-bold text-ink">Sensor to MCU</p>
          </div>
          <div className="absolute bottom-12 right-8 animate-float rounded-2xl border border-line bg-[rgb(var(--bg)/0.82)] p-5 shadow-glow backdrop-blur [animation-delay:1.2s]">
            <p className="text-sm text-muted">Prototype Mode</p>
            <p className="font-display text-2xl font-bold text-ink">Robot Ready</p>
          </div>
          <div className="absolute bottom-10 left-10 rounded-2xl border border-accent/25 bg-accent/10 px-4 py-3 text-accent shadow-glow backdrop-blur">
            <span className="font-display text-lg font-bold">Embedded Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
