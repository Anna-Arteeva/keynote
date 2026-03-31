import { motion } from 'framer-motion'

import { Eyebrow, FrostedPanel, Subtitle, Title } from '../components/Typography'

const scenarios = [
  {
    issue: 'Voice fails in noise',
    fallback: 'Visual UI',
    accent: '#d5c6f0',
  },
  {
    issue: 'Display fails in sun',
    fallback: 'Voice UI',
    accent: '#cbe4d8',
  },
]

function ArrowIcon() {
  return (
    <svg width="26" height="12" viewBox="0 0 26 12" fill="none" aria-hidden>
      <path
        d="M1 6h22M19 1.5 25 6l-6 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function MetasSolutionSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1120px, 100%)',
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 0.9fr) minmax(0, 1.2fr)',
        gap: 'clamp(24px, 3vw, 44px)',
        alignItems: 'start',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(10px, 2vh, 24px)',
        }}
      >
        <div style={{ height: '1.4vh' }} />
        <Title size="md" delay={0.3} style={{ textAlign: 'left', maxWidth: 480, lineHeight: 1.08 }}>
          When one modality fails,
          <br />
          another takes over.
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={0.8} style={{ textAlign: 'left', maxWidth: 380 }}>
        The future is in hybrid interfaces.
        </Subtitle>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 1.8vh, 18px)' }}>
        {scenarios.map((scenario, i) => (
          <FrostedPanel
            key={scenario.issue}
            delay={0.95 + i * 0.18}
            style={{
              padding: 'clamp(18px, 2.2vw, 24px)',
              minHeight: 150,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 + i * 0.14, duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
                alignItems: 'center',
                gap: 'clamp(16px, 2vw, 22px)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 10px',
                    borderRadius: 999,
                    background: 'rgba(45, 40, 70, 0.07)',
                    border: '1px solid rgba(45, 40, 70, 0.09)',
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(45, 40, 70, 0.58)',
                  }}
                >
                  Failure mode
                </div>
                <div style={{ height: 14 }} />
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 1.9vw, 28px)',
                    color: '#2D2846',
                    lineHeight: 1.2,
                  }}
                >
                  {scenario.issue}
                </div>
              </div>

              <div
                style={{
                  color: 'rgba(45, 40, 70, 0.34)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowIcon />
              </div>

              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '7px 10px',
                    borderRadius: 999,
                    background: scenario.accent,
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#2D2846',
                  }}
                >
                  Fallback
                </div>
                <div style={{ height: 14 }} />
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: 'clamp(26px, 2.5vw, 38px)',
                    color: '#2D2846',
                    lineHeight: 1.08,
                  }}
                >
                  {scenario.fallback}
                </div>
              </div>
            </motion.div>
          </FrostedPanel>
        ))}
      </div>
    </div>
  )
}
