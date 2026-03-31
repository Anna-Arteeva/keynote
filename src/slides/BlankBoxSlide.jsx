import { motion } from 'framer-motion'
import { Title, Spacer } from '../components/Typography'

const sans = "'Raleway', sans-serif"
const ease = [0.25, 0.1, 0.25, 1]

function PlusIcon({ size = 18, color = 'rgba(45, 40, 70, 0.45)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MicIcon({ size = 20, color = 'rgba(45, 40, 70, 0.45)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M9 22h6"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function VoiceWaveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="2" y="4" width="2" height="6" rx="1" fill="white" />
      <rect x="6" y="2" width="2" height="10" rx="1" fill="white" />
      <rect x="10" y="5" width="2" height="4" rx="1" fill="white" />
    </svg>
  )
}

/** ChatGPT-style empty-state composer (decorative, non-interactive) */
function ChatStartComposer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.28, duration: 0.55, ease }}
      style={{
        width: '100%',
        maxWidth: 'min(720px, 94vw)',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(10px, 2vw, 14px)',
        padding: '12px 12px 12px 16px',
        borderRadius: 9999,
        border: '1px solid rgba(45, 40, 70, 0.14)',
        background: 'rgba(255, 255, 255, 0.85)',
        boxShadow: '0 8px 28px rgba(45, 40, 70, 0.06)',
      }}
    >
      <PlusIcon />
      <span
        style={{
          flex: 1,
          minWidth: 0,
          fontFamily: sans,
          fontSize: 'clamp(15px, 1.5vw, 17px)',
          fontWeight: 500,
          color: 'rgba(45, 40, 70, 0.38)',
          textAlign: 'left',
        }}
      >
        Ask anything
      </span>
      <MicIcon />
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <VoiceWaveIcon />
      </div>
    </motion.div>
  )
}

const PILLARS = [
  { kicker: '01', text: 'Starting points?' },
  { kicker: '02', text: 'Follow-up questions?' },
  { kicker: '03', text: 'Suggestions?' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.42 + i * 0.14, duration: 0.58, ease },
  }),
}

export default function BlankBoxSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1080px, 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translateY(-2vh)',
      }}
    >
      <Title
        size="md"
        delay={0}
        style={{
          maxWidth: 'min(92vw, 720px)',
          lineHeight: 1.15,
        }}
      >
        Help users overcome the blank box
      </Title>
      <Spacer size="md" />
      <ChatStartComposer />
      <Spacer size="lg" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 'clamp(14px, 2.2vw, 26px)',
          width: '100%',
        }}
      >
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.kicker}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: 'relative',
              padding: 'clamp(1.35rem, 3.2vw, 2.1rem) clamp(1rem, 2vw, 1.35rem)',
              borderRadius: 20,
              background: 'linear-gradient(165deg, rgba(45, 40, 70, 0.09) 0%, rgba(45, 40, 70, 0.04) 100%)',
              border: '1px solid rgba(45, 40, 70, 0.16)',
              boxShadow: '0 18px 40px rgba(45, 40, 70, 0.06)',
              textAlign: 'center',
              minHeight: 'clamp(120px, 18vh, 200px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
            }}
          >
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(11px, 1.1vw, 13px)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#2D2846',
                opacity: 0.42,
              }}
            >
              {pillar.kicker}
            </span>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(17px, 1.85vw, 26px)',
                color: '#2D2846',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {pillar.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
