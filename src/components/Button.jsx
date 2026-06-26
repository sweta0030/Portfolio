import { motion } from 'framer-motion';

export default function Button({ href, children, variant = 'primary', icon: Icon, className = '', ...props }) {
  const Tag = href ? motion.a : motion.button;
  return (
    <Tag
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </Tag>
  );
}
