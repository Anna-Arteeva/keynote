import { motion } from 'framer-motion'

import { Eyebrow, FrostedPanel, Subtitle, Title } from '../components/Typography'

const rows = [
  { label: 'Travels often for conferences', state: 'Saved' },
  { label: 'Prefers boutique hotels over chains', state: 'Editable' },
  { label: 'Vegetarian meals on work trips', state: 'Removable' },
]

export default function MemoryDashboardSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1020px, 100%)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
        gap: 'clamp(18px, 2vw, 28px)',
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow style={{ textAlign: 'left' }}>A possible UI</Eyebrow>
        <div style={{ height: '1.4vh' }} />
        <Title size="md" delay={0.4} style={{ textAlign: 'left' }}>
          Memory dashboard
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={1} style={{ textAlign: 'left', maxWidth: 430 }}>
          A visible, editable record of what the AI believes about you.
        </Subtitle>
      </div>

      <FrostedPanel
        delay={0.8}
        style={{
          padding: 'clamp(18px, 2vw, 24px)',
        }}
      >
        <div
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: 'rgba(45, 40, 70, 0.52)',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            marginBottom: 14,
          }}
        >
          What the system knows
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.45 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                padding: '14px 16px',
                borderRadius: 16,
                background: 'rgba(255, 255, 255, 0.62)',
                border: '1px solid rgba(45, 40, 70, 0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 'clamp(15px, 1.45vw, 18px)',
                  fontWeight: 600,
                  color: '#2D2846',
                  lineHeight: 1.4,
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#2D2846',
                  background: 'rgba(45, 40, 70, 0.08)',
                  borderRadius: 999,
                  padding: '8px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {row.state}
              </span>
            </motion.div>
          ))}
        </div>
      </FrostedPanel>
    </div>
  )
}
