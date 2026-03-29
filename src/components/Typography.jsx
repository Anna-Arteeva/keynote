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
        color: '#2D2846',
        textAlign: 'center',
        lineHeight: 1.5,
        fontSize: sizes[size],
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

export function BulletList({ items, startDelay = 1 }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          custom={startDelay + i}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            color: '#2D2846',
            fontSize: 'clamp(18px, 2vw, 32px)',
            lineHeight: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#2D2846',
              opacity: 0.4,
              flexShrink: 0,
            }}
          />
          {item}
        </motion.li>
      ))}
    </ul>
  )
}

export function Spacer({ size = 'md' }) {
  const heights = { sm: '2vh', md: '4vh', lg: '6vh' }
  return <div style={{ height: heights[size] }} />
}
