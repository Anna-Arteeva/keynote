import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'

const nodes = [
  {
    label: 'User',
    detail: 'expertise',
    top: '6%',
    left: '36%',
    accent: 'rgba(217, 195, 241, 0.96)',
  },
  {
    label: 'Task',
    detail: 'intent',
    top: '40%',
    right: '2%',
    accent: 'rgba(244, 221, 170, 0.96)',
  },
  {
    label: 'Moment',
    detail: 'context',
    bottom: '4%',
    left: '34%',
    accent: 'rgba(203, 228, 216, 0.96)',
  },
]

export default function GenerativeUISlide() {
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
      <div style={{ maxWidth: 420 }}>
        <Eyebrow style={{ textAlign: 'left' }}>Paradigm 4</Eyebrow>
        <div style={{ height: '1.6vh' }} />
        <Title size="xl" delay={0.25} style={{ textAlign: 'left', lineHeight: 1.01 }}>
          Generative UI
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={0.7} style={{ textAlign: 'left', maxWidth: 360 }}>
          Interfaces can assemble themselves around the user, the task, and the moment.
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
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 28% 28%, rgba(217, 195, 241, 0.24), transparent 28%), radial-gradient(circle at 74% 34%, rgba(244, 221, 170, 0.24), transparent 26%), radial-gradient(circle at 40% 82%, rgba(203, 228, 216, 0.22), transparent 28%)',
          }}
        />

        <svg
          viewBox="0 0 640 520"
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <defs>
            <linearGradient id="gen-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(217,195,241,0.7)" />
              <stop offset="100%" stopColor="rgba(203,228,216,0.7)" />
            </linearGradient>
          </defs>
          <path
            d="M324 152 Q 430 206 434 258"
            stroke="url(#gen-stroke)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M434 270 Q 420 344 324 388"
            stroke="url(#gen-stroke)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M310 386 Q 226 344 214 260"
            stroke="url(#gen-stroke)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M214 248 Q 226 184 314 150"
            stroke="url(#gen-stroke)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 210,
            height: 210,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(235,231,249,0.88) 42%, rgba(220,230,226,0.8) 100%)',
            boxShadow:
              '0 18px 50px rgba(30, 25, 50, 0.12), inset 0 1px 0 rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(30px, 2.8vw, 42px)',
              lineHeight: 1.03,
              color: '#2D2846',
            }}
          >
            Interface
            <br />
            assembles
          </div>
        </motion.div>

        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.14, duration: 0.5 }}
            style={{
              position: 'absolute',
              width: 'clamp(148px, 16vw, 182px)',
              padding: '16px 18px',
              borderRadius: 22,
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(45, 40, 70, 0.08)',
              boxShadow: '0 16px 36px rgba(30, 25, 50, 0.08)',
              ...('top' in node ? { top: node.top } : {}),
              ...('bottom' in node ? { bottom: node.bottom } : {}),
              ...('left' in node ? { left: node.left } : {}),
              ...('right' in node ? { right: node.right } : {}),
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: node.accent,
                marginBottom: 12,
                boxShadow: '0 0 0 6px rgba(255,255,255,0.55)',
              }}
            />
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(45, 40, 70, 0.48)',
                marginBottom: 8,
              }}
            >
              {node.label}
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 'clamp(24px, 2vw, 30px)',
                lineHeight: 1.02,
                color: '#2D2846',
              }}
            >
              adapts to
              <br />
              {node.detail}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
