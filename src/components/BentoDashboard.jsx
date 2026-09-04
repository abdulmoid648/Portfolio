import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud, Layers, Server, GraduationCap,
  Database, Briefcase, GitBranch, BookOpen, Smartphone
} from 'lucide-react';
import {
  SiNextdotjs, SiFlutter, SiGraphql,
  SiTypescript, SiRust, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const PROFILE_IMAGE = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face';
const DASHBOARD_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop';

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Rust', icon: SiRust, color: '#DEA584' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

/* ─── Stat Card ─── */
const StatCard = ({ icon: Icon, iconColor, value, label, style, index = 0 }) => (
  <motion.div
    className="bd-card bd-stat"
    style={style}
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariant}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    <div className="bd-stat-icon" style={{ color: iconColor }}>
      <Icon size={18} />
    </div>
    <div className="bd-stat-value">{value}</div>
    <div className="bd-stat-label">{label}</div>
  </motion.div>
);

/* ─── Main Dashboard ─── */
const BentoDashboard = ({ onOpenWindow }) => {
  return (
    <div className="bd-wrapper">
      <div className="bd-grid">

        {/* ═══ HERO CARD ═══ */}
        <motion.div
          className="bd-card bd-hero"
          style={{ gridColumn: '1 / 4', gridRow: '1 / 3' }}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <span className="bd-hero-badge">Hero Shot</span>
          <h1 className="bd-hero-title">
            CS Student |<br />Always Learning
          </h1>
          <p className="bd-hero-desc">
            Computer Science student at Riphah International University,
            passionate about learning.
          </p>
          <div className="bd-hero-actions">
            <button className="bd-btn-pill" onClick={() => onOpenWindow?.('hero')}>
              Learn More
            </button>
            <button className="bd-btn-ghost" onClick={() => onOpenWindow?.('projects')}>
              More now &rarr;
            </button>
          </div>
          <div className="bd-hero-photo">
            <img src={PROFILE_IMAGE} alt="Abdul Moied" />
          </div>
        </motion.div>

        {/* ═══ TECH STACK ═══ */}
        <motion.div
          className="bd-card bd-tech"
          style={{ gridColumn: '4 / 5', gridRow: '1 / 3' }}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          {techStack.map((t) => (
            <div key={t.name} className="bd-tech-row">
              <t.icon size={18} color={t.color} />
              <span>{t.name}</span>
            </div>
          ))}
          <div className="bd-tech-row">
            <FaAws size={18} color="#FF9900" />
            <span>AWS</span>
          </div>
        </motion.div>

        {/* ═══ TOP-RIGHT STATS ═══ */}
        <StatCard
          icon={GraduationCap} iconColor="#60a5fa"
          value="Riphah" label="BS CS (In Progress)"
          style={{ gridColumn: '5 / 6', gridRow: '1 / 2' }}
          index={2}
        />
        <StatCard
          icon={Server} iconColor="#339933"
          value="Node.js" label="Express / APIs"
          style={{ gridColumn: '6 / 7', gridRow: '1 / 2' }}
          index={3}
        />

        {/* ═══ LOCATION ═══ */}
        <motion.div
          className="bd-card bd-location"
          style={{ gridColumn: '5 / 7', gridRow: '2 / 3' }}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <h2 className="bd-location-city">Lahore, PK</h2>
          <span className="bd-location-sub">Lahore, PK</span>
        </motion.div>

        {/* ═══ ROW 3 ═══ */}
        <StatCard
          icon={Database} iconColor="#47A248"
          value="MongoDB" label="& PostgreSQL"
          style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          index={5}
        />
        <StatCard
          icon={Briefcase} iconColor="#10b981"
          value="Frontend Dev" label="Verdant Soft Intern"
          style={{ gridColumn: '2 / 3', gridRow: '3 / 4' }}
          index={6}
        />

        {/* ═══ FEATURED PROJECT ═══ */}
        <motion.div
          className="bd-card bd-featured"
          style={{ gridColumn: '3 / 5', gridRow: '3 / 5', cursor: 'pointer' }}
          custom={7}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onClick={() => onOpenWindow?.('projects')}
        >
          <div className="bd-featured-img-wrap">
            <img src={DASHBOARD_IMAGE} alt="TaskFlow Pro Dashboard" />
          </div>
          <div className="bd-featured-body">
            <span className="bd-featured-badge">Featured</span>
            <h3 className="bd-featured-name">TaskFlow Pro</h3>
            <p className="bd-featured-desc">
              High-resolution production-grade task management with real-time
              bidirectional sync, features, and technologies.
            </p>
            <button className="bd-btn-pill bd-btn-sm">Feature UI &rarr;</button>
          </div>
        </motion.div>

        <StatCard
          icon={Layers} iconColor="#a78bfa"
          value="100" label="Projects & Inside"
          style={{ gridColumn: '5 / 6', gridRow: '3 / 4' }}
          index={8}
        />
        <StatCard
          icon={GitBranch} iconColor="#f0f6fc"
          value="500+" label="Commits"
          style={{ gridColumn: '6 / 7', gridRow: '3 / 4' }}
          index={9}
        />

        {/* ═══ ROW 4 ═══ */}
        <motion.div
          className="bd-card bd-location"
          style={{ gridColumn: '1 / 3', gridRow: '4 / 5', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          custom={10}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <Smartphone size={20} style={{ color: '#02569B', flexShrink: 0 }} />
          <div>
            <div className="bd-stat-value" style={{ fontSize: '1rem' }}>Flutter / Dart</div>
            <div className="bd-stat-label">Cross-Platform Mobile</div>
          </div>
        </motion.div>
        <StatCard
          icon={Cloud} iconColor="#38bdf8"
          value="Cloud-" label="Native"
          style={{ gridColumn: '5 / 6', gridRow: '4 / 5' }}
          index={12}
        />
        <StatCard
          icon={BookOpen} iconColor="#c084fc"
          value="CS Core" label="OS • DSA • OOP"
          style={{ gridColumn: '6 / 7', gridRow: '4 / 5' }}
          index={13}
        />
      </div>
    </div>
  );
};

export default BentoDashboard;
