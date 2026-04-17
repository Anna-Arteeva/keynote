import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const lines = [
  {
    text: 'The real shift',
    fontSize: 'clamp(11px, 1vw, 14px)',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    color: 'rgba(45, 40, 70, 0.5)',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    delay: 0,
  },
  {
    text: 'is bigger than workflow.',
    fontSize: 'clamp(28px, 3.5vw, 64px)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    color: 'rgba(45, 40, 70, 0.72)',
    letterSpacing: '-0.02em',
    delay: 0.65,
  },
  {
    text: "It's about what we're building.",
    fontSize: 'clamp(40px, 6vw, 112px)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 900,
    color: '#2D2846',
    letterSpacing: '-0.025em',
    delay: 1.4,
  },
]

export default function RealMissionSlide() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'min(92vw, 1080px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 'clamp(14px, 2.2vh, 28px)',
        padding: 'clamp(28px, 4vw, 44px)',
      }}
    >
      {/* Ambient glow — top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '8%',
          width: 'clamp(170px, 22vw, 260px)',
          height: 'clamp(170px, 22vw, 260px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #cbb9ea 0%, rgba(255,255,255,0) 72%)',
          filter: 'blur(8px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      {/* Ambient glow — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.08, ease }}
        style={{
          position: 'absolute',
          right: '6%',
          bottom: '-12%',
          width: 'clamp(200px, 26vw, 300px)',
          height: 'clamp(200px, 26vw, 300px)',
          borderRadius: '44% 56% 60% 40% / 52% 42% 58% 48%',
          background: 'radial-gradient(circle at 35% 35%, #f3d5c7 0%, rgba(255,255,255,0) 75%)',
          filter: 'blur(10px)',
          opacity: 0.42,
          pointerEvents: 'none',
        }}
      />

      {lines.map((line) => (
        <motion.p
          key={line.text}
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: line.delay, duration: 0.82, ease }}
          style={{
            fontFamily: line.fontFamily,
            fontWeight: line.fontWeight,
            fontSize: line.fontSize,
            color: line.color,
            letterSpacing: line.letterSpacing,
            textTransform: line.textTransform,
            textAlign: 'center',
            lineHeight: 1.18,
            margin: 0,
            position: 'relative',
          }}
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  )
}
