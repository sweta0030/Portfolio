import {
  Award,
  Binary,
  Bluetooth,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  Gauge,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Radio,
  ShieldCheck,
  Sun,
  Trophy,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
  { label: 'GitHub', href: 'https://github.com/', icon: Binary },
  { label: 'Email', href: 'mailto:swetasingh0316@gmail.com', icon: Mail },
];

export const education = [
  {
    title: 'B.Tech in Electrical & Electronics Engineering',
    place: 'GL Bajaj Institute of Technology & Management',
    meta: '2023-2027',
    detail: 'CGPA: 7.5/10',
    icon: GraduationCap,
  },
  {
    title: 'Class XII',
    place: 'Central Academy Senior Secondary School',
    meta: 'Senior Secondary',
    detail: 'Science foundation with electronics interest',
    icon: Award,
  },
  {
    title: 'Class X',
    place: 'Central Academy Senior Secondary School',
    meta: 'Secondary',
    detail: 'Academic foundation and leadership activities',
    icon: ShieldCheck,
  },
];

export const skills = [
  { category: 'Hardware', icon: Cpu, items: ['Arduino UNO', 'ESP32'], level: 86 },
  { category: 'Languages', icon: Binary, items: ['C', 'Embedded C'], level: 80 },
  {
    category: 'Sensors',
    icon: Radio,
    items: ['Ultrasonic Sensor', 'LDR', 'Relay Module', 'Bluetooth Module'],
    level: 82,
  },
  {
    category: 'Domains',
    icon: BrainCircuit,
    items: ['Embedded Systems', 'IoT', 'Robotics', 'Automation', 'Basic Electronics'],
    level: 88,
  },
  { category: 'Tools', icon: Wrench, items: ['Arduino IDE', 'Proteus', 'MS Office'], level: 78 },
  {
    category: 'Soft Skills',
    icon: Users,
    items: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Time Management'],
    level: 90,
  },
];

export const projects = [
  {
    title: 'Real-Time Human Detection with Mobile Robot',
    icon: Bot,
    description:
      'A mobile robotics concept for detecting humans in real time using embedded control, sensors, and alert-ready automation logic.',
    details:
      'Designed as an assistive exploration robot where detection input, motor response, and system feedback are handled through a compact embedded workflow.',
    tags: ['Robotics', 'Embedded C', 'Sensors', 'Automation'],
    accent: '#00E5FF',
  },
  {
    title: 'Obstacle Avoidance Robot',
    icon: Gauge,
    description:
      'Autonomous robot prototype that senses nearby obstacles and adjusts direction with clean control logic.',
    details:
      'Uses ultrasonic sensing, motor control, and decision rules to maintain movement while avoiding collisions in dynamic environments.',
    tags: ['Arduino UNO', 'Ultrasonic Sensor', 'Motor Driver'],
    accent: '#22C55E',
  },
  {
    title: 'Smart Home Automation System',
    icon: Home,
    description:
      'IoT-enabled automation system for controlling common home loads through connected electronic modules.',
    details:
      'Built around relay switching, Bluetooth/IoT communication ideas, and a modular approach for appliance control and safety.',
    tags: ['IoT', 'ESP32', 'Relay Module', 'Bluetooth'],
    accent: '#3B82F6',
  },
  {
    title: 'Solar Power Optimizer',
    icon: Sun,
    description:
      'Electronics concept focused on improving solar energy usage through monitoring and efficient power handling.',
    details:
      'Explores sensor-informed optimization, renewable-energy electronics, and practical embedded measurement flows.',
    tags: ['Solar', 'Sensors', 'Power Electronics'],
    accent: '#FACC15',
  },
];

export const achievements = [
  { title: 'Career Catalyst - Student Tech Fusion 2026', icon: Trophy },
  { title: 'Connected, Autonomous & EV Technology Program', icon: Zap },
  { title: 'IEEE PEEIC-2024 Volunteer', icon: Radio },
  { title: 'SuperNova Hackathon 2025', icon: BrainCircuit },
  { title: 'AKTU Sports Fest', icon: Trophy },
  { title: 'GLBMUN 2024', icon: Users },
  { title: 'Industrial Visit - RISE Appliances', icon: Lightbulb },
];

export const contactCards = [
  { label: 'Location', value: 'Greater Noida, Uttar Pradesh', href: '#contact', icon: MapPin },
  { label: 'Phone', value: '+91-9696810875', href: 'tel:+919696810875', icon: Phone },
  { label: 'Email', value: 'swetasingh0316@gmail.com', href: 'mailto:swetasingh0316@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'LinkedIn profile', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
  { label: 'GitHub', value: 'GitHub profile', href: 'https://github.com/', icon: Bluetooth },
];
