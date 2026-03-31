import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const headlineSize = 'clamp(44px, 7vw, 104px)'

const lines = [
  { text: 'Voice' },
  { text: 'Gesture' },
  { text: 'Vision' },
  { text: 'Screen' },
]

export default function VoiceGestureVisionScreenSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(20px, 3.5vh, 40px)',
        width: '100%',
        maxWidth: 'min(94vw, 980px)',
      }}
    >
      {lines.map((line, i) => (
        <motion.p
          key={line.text}
          initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: 0.15 + i * 0.82,
            duration: 0.88,
            ease,
          }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            color: '#2D2846',
            textAlign: 'center',
            lineHeight: 1.18,
            fontSize: headlineSize,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  )
}
