import { motion } from 'framer-motion'

import { Eyebrow, FrostedPanel, Subtitle, Title } from '../components/Typography'
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
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 0.9fr) minmax(0, 1.15fr)',
        gap: 'clamp(20px, 2.6vw, 34px)',
        alignItems: 'start',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(12px, 1.6vh, 16px)',
        }}
      >
        <div>
          <Eyebrow style={{ textAlign: 'left' }}>Adaptive interface output</Eyebrow>
          <div style={{ height: '1.4vh' }} />
          <Title size="md" delay={0.3} style={{ textAlign: 'left', maxWidth: 430, lineHeight: 1.08 }}>
            Same system.
            <br />
            Different interface.
          </Title>
          <div style={{ height: '1.8vh' }} />
          <Subtitle size="sm" delay={0.75} style={{ textAlign: 'left', maxWidth: 360 }}>
            Generative UI changes the presentation layer to fit the user, not just the task.
          </Subtitle>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {audiences.map((audience, i) => (
            <FrostedPanel
              key={audience.label}
              delay={0.95 + i * 0.16}
              style={{
                padding: '16px 18px',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.14, duration: 0.4 }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '7px 10px',
                    borderRadius: 999,
                    background: audience.accent,
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#2D2846',
                  }}
                >
                  {audience.label}
                </div>
              </motion.div>
            </FrostedPanel>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(14px, 1.6vh, 18px)',
        }}
      >
        {audiences.map((audience, i) => (
          <FrostedPanel
            key={`${audience.label}-image`}
            delay={0.75 + i * 0.14}
            style={{
              padding: '12px 12px 10px',
            }}
          >
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2D2846',
                marginBottom: 8,
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
                border: '1px solid rgba(45, 40, 70, 0.08)',
                boxShadow: '0 14px 30px rgba(30, 25, 50, 0.14)',
              }}
            />
          </FrostedPanel>
        ))}
      </motion.div>
    </div>
  )
}
