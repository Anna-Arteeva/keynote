import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'
import geminiMathImage from '../assets/gemini-math.png'
import geminiFractalsImage from '../assets/gemini-fractals.png'

const audiences = [
  {
    label: '5-year-old',
    accent: '#f3d8a6',
    image: geminiMathImage,
    alt: 'Gemini math interface tailored for a 5-year-old',
  },
  {
    label: 'Grad student',
    accent: '#d1c6f1',
    image: geminiFractalsImage,
    alt: 'Gemini fractal interface tailored for a grad student',
  },
]

export default function GenerativeUIImageSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1120px, 96vw)',
        margin: '0 auto',
        padding: '0 6vw',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 2.4vh, 28px)',
      }}
    >
      <div>
        <Eyebrow style={{ textAlign: 'center' }}>Adaptive interface output</Eyebrow>
        <div style={{ height: '1.4vh' }} />
        <Title size="md" delay={0.3} style={{ textAlign: 'center', lineHeight: 1.08 }}>
          Same system.
          <br />
          Different interface.
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={0.75} style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          Generative UI changes the presentation layer to fit the user, not just the task.
        </Subtitle>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 'clamp(18px, 2.2vw, 30px)',
          alignItems: 'start',
        }}
      >
        {audiences.map((audience, i) => (
          <motion.div
            key={`${audience.label}-image`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 + i * 0.12, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 2.5vw, 34px)',
                fontWeight: 900,
                color: '#2D2846',
                textAlign: 'center',
                lineHeight: 1.08,
                marginBottom: 12,
              }}
            >
              {audience.label}
            </div>
            <img
              src={audience.image}
              alt={audience.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 16,
                boxShadow: '0 14px 30px rgba(30, 25, 50, 0.14)',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
