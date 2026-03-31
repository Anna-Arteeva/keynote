import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export function Title({ children, size = 'xl', delay = 0, style }) {
  const sizes = {
    xxl: 'clamp(56px, 9vw, 152px)',
    xl: 'clamp(48px, 7vw, 120px)',
    lg: 'clamp(36px, 5vw, 88px)',
    md: 'clamp(28px, 3.5vw, 64px)',
  }

  return (
    <motion.h1
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        color: '#2D2846',
        textAlign: 'center',
        lineHeight: 1.15,
        fontSize: sizes[size],
        margin: 0,
        ...style,
      }}
    >
      {children}
    </motion.h1>
  )
}

export function Subtitle({ children, size = 'lg', delay = 1, style }) {
  const sizes = {
    lg: 'clamp(20px, 2.5vw, 42px)',
    md: 'clamp(18px, 2vw, 32px)',
    sm: 'clamp(16px, 1.5vw, 24px)',
  }

  return (
    <motion.p
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 700,
        color: 'rgba(45, 40, 70, 0.78)',
        textAlign: 'center',
        lineHeight: 1.45,
        fontSize: sizes[size],
        margin: 0,
        ...style,
      }}
    >
      {children}
    </motion.p>
  )
}

export function Eyebrow({ children, delay = 0, style }) {
  return (
    <motion.p
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 700,
        color: 'rgba(45, 40, 70, 0.5)',
        textAlign: 'center',
        lineHeight: 1.2,
        fontSize: 'clamp(11px, 1vw, 14px)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        margin: 0,
        ...style,
      }}
    >
      {children}
    </motion.p>
  )
}

export function BodyText({ children, delay = 1, style }) {
  return (
    <motion.p
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 500,
        color: '#2D2846',
        textAlign: 'center',
        lineHeight: 1.7,
        fontSize: 'clamp(16px, 1.8vw, 28px)',
        margin: 0,
        ...style,
      }}
    >
      {children}
    </motion.p>
  )
}

const easeOut = [0.25, 0.1, 0.25, 1]

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: 'block', flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10.5" stroke="#2D2846" strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M7.5 12l2.8 2.8L16.5 8.6"
        stroke="#2D2846"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DotIcon() {
  return (
    <span
      aria-hidden
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: '#2D2846',
        opacity: 0.72,
        display: 'block',
      }}
    />
  )
}

function ListItemCard({ children, delay, icon, fontSize = 'clamp(18px, 2vw, 32px)' }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration: 0.48,
        ease: easeOut,
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: 'clamp(14px, 1.8vh, 18px) clamp(16px, 2vw, 22px)',
        borderRadius: 22,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.52) 100%)',
        border: '1px solid rgba(45, 40, 70, 0.1)',
        boxShadow: '0 14px 34px rgba(30, 25, 50, 0.06)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: 'rgba(45, 40, 70, 0.06)',
          border: '1px solid rgba(45, 40, 70, 0.08)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 600,
          color: '#2D2846',
          fontSize,
          lineHeight: 1.35,
          minWidth: 0,
          flex: 1,
        }}
      >
        {children}
      </div>
    </motion.li>
  )
}

export function BulletList({ items, startDelay = 1 }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(12px, 1.4vh, 16px)',
      }}
    >
      {items.map((item, i) => (
        <ListItemCard key={i} delay={startDelay + i * 0.18} icon={<DotIcon />}>
          {item}
        </ListItemCard>
      ))}
    </ul>
  )
}

export function CheckList({
  items,
  startDelay = 0,
  /** Seconds between each row’s text starting */
  rowStep = 0.72,
  /** Seconds after row text before the check animates in */
  checkLag = 0.48,
}) {
  const fontSize = 'clamp(18px, 2vw, 32px)'

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(12px, 1.4vh, 16px)',
      }}
    >
      {items.map((item, i) => {
        const textDelay = startDelay + i * rowStep
        const checkDelay = textDelay + checkLag

        return (
          <ListItemCard
            key={i}
            delay={textDelay}
            fontSize={fontSize}
            icon={
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: checkDelay,
                  duration: 0.5,
                  ease: easeOut,
                }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <CheckIcon />
              </motion.div>
            }
          >
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: textDelay,
                duration: 0.55,
                ease: easeOut,
              }}
              style={{ display: 'block' }}
            >
              {item}
            </motion.span>
          </ListItemCard>
        )
      })}
    </ul>
  )
}

export function Spacer({ size = 'md' }) {
  const heights = { sm: '2vh', md: '4vh', lg: '6vh' }
  return <div style={{ height: heights[size] }} />
}

export function FrostedPanel({ children, delay = 0, style }) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
        border: '1px solid rgba(45, 40, 70, 0.12)',
        boxShadow: '0 18px 48px rgba(45, 40, 70, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 24,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
