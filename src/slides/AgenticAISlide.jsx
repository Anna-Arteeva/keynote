import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'

const stages = [
  {
    step: '01',
    label: 'Observe',
    description: 'understands context',
    accent: 'rgba(203, 228, 216, 0.96)',
  },
  {
    step: '02',
    label: 'Plan',
    description: 'chooses a path',
    accent: 'rgba(216, 203, 243, 0.96)',
  },
  {
    step: '03',
    label: 'Act',
    description: 'does work for you',
    accent: 'rgba(244, 221, 170, 0.96)',
  },
]

export default function AgenticAISlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1140px, 100%)',
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 0.88fr) minmax(0, 1.12fr)',
        gap: 'clamp(28px, 3vw, 48px)',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: 440 }}>
        <Eyebrow style={{ textAlign: 'left' }}>Where this goes next</Eyebrow>
        <div style={{ height: '1.6vh' }} />
        <Title size="xl" delay={0.25} style={{ textAlign: 'left', lineHeight: 1.01 }}>
          Agentic AI
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={0.7} style={{ textAlign: 'left', maxWidth: 390 }}>
          Beyond interfaces that adapt, toward systems that can reason, coordinate, and complete work with us.
        </Subtitle>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          height: 'min(58vh, 520px)',
          minHeight: 420,
          borderRadius: 34,
          overflow: 'hidden',
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.46) 100%)',
          border: '1px solid rgba(45, 40, 70, 0.1)',
          boxShadow: '0 28px 72px rgba(30, 25, 50, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: 'clamp(26px, 3vw, 34px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'clamp(14px, 1.8vh, 18px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 32%, rgba(203, 228, 216, 0.2), transparent 24%), radial-gradient(circle at 50% 52%, rgba(216, 203, 243, 0.18), transparent 30%), radial-gradient(circle at 84% 70%, rgba(244, 221, 170, 0.2), transparent 24%)',
          }}
        />

        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.14, duration: 0.5 }}
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '74px minmax(0, 1fr)',
              gap: 18,
              alignItems: 'center',
              padding: 'clamp(18px, 2.2vw, 24px)',
              borderRadius: 26,
              background: 'rgba(255,255,255,0.68)',
              border: '1px solid rgba(45, 40, 70, 0.08)',
              boxShadow: '0 14px 34px rgba(30, 25, 50, 0.07)',
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: '50%',
                background: stage.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2D2846',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)',
              }}
            >
              {stage.step}
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: 'clamp(28px, 2.3vw, 38px)',
                  lineHeight: 1.02,
                  color: '#2D2846',
                  marginBottom: 6,
                }}
              >
                {stage.label}
              </div>
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  lineHeight: 1.3,
                  color: 'rgba(45, 40, 70, 0.72)',
                }}
              >
                {stage.description}
              </div>
            </div>

            {i < stages.length - 1 ? (
              <div
                style={{
                  position: 'absolute',
                  left: 62,
                  bottom: -16,
                  width: 2,
                  height: 20,
                  background: 'linear-gradient(180deg, rgba(45,40,70,0.2), rgba(45,40,70,0.04))',
                }}
              />
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
