import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'

const sources = ['Email', 'Calendar', 'Slack']

export default function ConcernDataSlide() {
  return (
    <div
      style={{
        width: 'min(980px, 100%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 'clamp(28px, 3.5vw, 44px)',
      }}
    >
      <Eyebrow style={{ textAlign: 'left' }}>The tension</Eyebrow>
      <div style={{ height: '1.6vh' }} />
      <Title size="md" delay={0.4} style={{ textAlign: 'left', maxWidth: 700 }}>
        But what about your email, your calendar, your Slack messages?
      </Title>
      <div style={{ height: '2vh' }} />
      <Subtitle size="sm" delay={1} style={{ textAlign: 'left', maxWidth: 680 }}>
        Helpful AI needs context. Personal context raises the trust question immediately.
      </Subtitle>
      <div style={{ height: '2.6vh' }} />
      <div style={{ display: 'flex', gap: 'clamp(12px, 1.8vw, 18px)', flexWrap: 'wrap' }}>
        {sources.map((source, i) => (
          <motion.div
            key={source}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.12, duration: 0.45 }}
            style={{
              padding: '12px 18px',
              borderRadius: 999,
              background: 'rgba(45, 40, 70, 0.08)',
              border: '1px solid rgba(45, 40, 70, 0.12)',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              color: '#2D2846',
              letterSpacing: '0.02em',
            }}
          >
            {source}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
